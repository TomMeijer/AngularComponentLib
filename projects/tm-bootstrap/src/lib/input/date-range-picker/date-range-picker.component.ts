import {Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerDirective} from 'ngx-bootstrap/datepicker';
import {AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {LabelComponent} from '../label/label.component';
import {InputGroupTextComponent} from '../input-group-text/input-group-text.component';

@Component({
  selector: 'tm-date-range-picker',
  standalone: true,
  imports: [
    FormsModule,
    BsDatepickerModule,
    LabelComponent,
    InputGroupTextComponent
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent implements OnChanges, ControlValueAccessor, Validator {
  @ViewChild('dateRangePicker', {static: false})
  public dateRangePicker: BsDaterangepickerDirective;

  @Input()
  public label: string | TemplateRef<any>;
  @Input()
  public name: string;
  @Input()
  public required: boolean;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public placeholder: string;
  @Input()
  public className: string;
  @Input()
  public tooltipText: string;
  @Input()
  public tooltipIcon = 'bi bi-question-circle';
  @Input()
  public prependText: string | TemplateRef<any>;
  @Input()
  public prependIcon: string;
  @Input()
  public appendText: string | TemplateRef<any>;
  @Input()
  public appendIcon: string;
  @Input()
  public small: boolean;
  @Input()
  public disabled: boolean;
  @Input()
  public readOnly: boolean;
  @Input()
  public minDate: Date;
  @Input()
  public maxDate: Date;
  @Input()
  public maxDays: number;
  @Input()
  public ranges: {label: string, value: Date | Date[]}[];
  @Input()
  public containerClass: string;
  @Input()
  public validationFn: (control: AbstractControl) => ValidationErrors | null;

  @Output()
  public onChange: EventEmitter<Date[]> = new EventEmitter();
  @Output()
  public prependClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output()
  public appendClick: EventEmitter<MouseEvent> = new EventEmitter();

  private datePipe = new DatePipe('en-US');
  public config: Partial<BsDaterangepickerConfig> = {
    rangeInputFormat: 'DD-MM-YYYY',
    showWeekNumbers: false,
    containerClass: 'theme-default',
    rangeSeparator: ' / '
  };
  public _value: Date[];
  private onChangeFn = (value: Date[]) => {};
  private onValidatorChangeFn = () => {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxDays']?.currentValue) {
      this.config.maxDateRange = this.maxDays;
      this.updateConfig();
    }
    if (changes['ranges']?.currentValue) {
      this.config.ranges = this.ranges;
      this.updateConfig();
    }
    if (changes['containerClass']?.currentValue) {
      this.config.containerClass = this.containerClass;
      this.updateConfig();
    }
    if (changes['required'] || changes['minDate'] || changes['maxDate'] || changes['maxDays']) {
      this.onValidatorChangeFn();
    }
  }

  private updateConfig(): void {
    if (this.dateRangePicker) {
      this.dateRangePicker.setConfig();
    }
  }

  get value(): Date[] {
    return this._value;
  }

  set value(value: Date[]) {
    if (JSON.stringify(value) !== JSON.stringify(this._value)) {
      this._value = value;
      this.onChangeFn(value);
      this.onValidatorChangeFn();
    }
  }

  writeValue(value: Date[]): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errors: ValidationErrors = {};
    if (!this.isValid()) {
      errors['required'] = 'Required';
    }
    if (!this.isMinDateValid()) {
      errors['minDate'] = `Minimum date: ${this.datePipe.transform(this.minDate, 'dd-MM-yyyy')}`;
    }
    if (!this.isMaxDateValid()) {
      errors['maxDate'] = `Maximum date: ${this.datePipe.transform(this.maxDate, 'dd-MM-yyyy')}`;
    }
    if (!this.isMaxDaysValid()) {
      errors['maxDays'] = `Maximum days: ${this.maxDays}`;
    }
    if (this.validationFn) {
      const customErrors = this.validationFn(control);
      if (customErrors) {
        errors = {...errors, ...customErrors};
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  private isValid(): boolean {
    return !this.required || (this._value && this._value.length > 1);
  }

  private isMinDateValid(): boolean {
    if (!this.minDate || !this._value || this._value.length < 2) {
      return true;
    }
    return this._value[0] >= this.minDate;
  }

  private isMaxDateValid(): boolean {
    if (!this.maxDate || !this._value || this._value.length < 2) {
      return true;
    }
    return this._value[1] <= this.maxDate;
  }

  private isMaxDaysValid(): boolean {
    if (!this.maxDays || !this._value || this._value.length < 2) {
      return true;
    }
    const days = (this._value[1].getTime() - this._value[0].getTime()) / 86400000;
    return days <= this.maxDays;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChangeFn = fn;
  }

  public isInputGroup(): boolean {
    return this.hasPrepend() || this.hasAppend();
  }

  public hasPrepend(): boolean {
    return (!!this.prependIcon || !!this.prependText);
  }

  public hasAppend(): boolean {
    return (!!this.appendIcon || !!this.appendText);
  }
}
