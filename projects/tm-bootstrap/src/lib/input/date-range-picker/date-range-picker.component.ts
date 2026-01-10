import {Component, effect, forwardRef, input, output, TemplateRef, viewChild} from '@angular/core';
import {BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerDirective} from 'ngx-bootstrap/datepicker';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
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
export class DateRangePickerComponent implements ControlValueAccessor, Validator {
  public dateRangePicker = viewChild<BsDaterangepickerDirective>('dateRangePicker');

  public label = input<string | TemplateRef<any>>();
  public name = input<string>();
  public required = input<boolean>();
  public showRequiredStar = input<boolean>();
  public placeholder = input<string>();
  public className = input<string>();
  public tooltipText = input<string>();
  public tooltipIcon = input('bi bi-question-circle');
  public prependText = input<string | TemplateRef<any>>();
  public prependIcon = input<string>();
  public appendText = input<string | TemplateRef<any>>();
  public appendIcon = input<string>();
  public small = input<boolean>();
  public disabled = input<boolean>();
  public readOnly = input<boolean>();
  public minDate = input<Date>();
  public maxDate = input<Date>();
  public maxDays = input<number>();
  public ranges = input<{label: string, value: Date | Date[]}[]>();
  public containerClass = input<string>();
  public validationFn = input<(control: AbstractControl) => ValidationErrors | null>();

  public onChange = output<Date[]>();
  public prependClick = output<MouseEvent>();
  public appendClick = output<MouseEvent>();

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

  constructor() {
    effect(() => {
      if (this.maxDays()) {
        this.config.maxDateRange = this.maxDays();
        this.updateConfig();
      }
    });
    effect(() => {
      if (this.ranges()) {
        this.config.ranges = this.ranges();
        this.updateConfig();
      }
    });
    effect(() => {
      if (this.containerClass()) {
        this.config.containerClass = this.containerClass();
        this.updateConfig();
      }
    });
    effect(() => {
      this.required();
      this.minDate();
      this.maxDate();
      this.maxDays();
      this.onValidatorChangeFn();
    });
  }

  private updateConfig(): void {
    if (this.dateRangePicker()) {
      this.dateRangePicker().setConfig();
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
      errors['minDate'] = `Minimum date: ${this.datePipe.transform(this.minDate(), 'dd-MM-yyyy')}`;
    }
    if (!this.isMaxDateValid()) {
      errors['maxDate'] = `Maximum date: ${this.datePipe.transform(this.maxDate(), 'dd-MM-yyyy')}`;
    }
    if (!this.isMaxDaysValid()) {
      errors['maxDays'] = `Maximum days: ${this.maxDays()}`;
    }
    if (this.validationFn()) {
      const customErrors = this.validationFn()(control);
      if (customErrors) {
        errors = {...errors, ...customErrors};
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  private isValid(): boolean {
    return !this.required() || (this._value && this._value.length > 1);
  }

  private isMinDateValid(): boolean {
    if (!this.minDate() || !this._value || this._value.length < 2) {
      return true;
    }
    return this._value[0] >= this.minDate();
  }

  private isMaxDateValid(): boolean {
    if (!this.maxDate() || !this._value || this._value.length < 2) {
      return true;
    }
    return this._value[1] <= this.maxDate();
  }

  private isMaxDaysValid(): boolean {
    if (!this.maxDays() || !this._value || this._value.length < 2) {
      return true;
    }
    const days = (this._value[1].getTime() - this._value[0].getTime()) / 86400000;
    return days <= this.maxDays();
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChangeFn = fn;
  }

  public isInputGroup(): boolean {
    return this.hasPrepend() || this.hasAppend();
  }

  public hasPrepend(): boolean {
    return (!!this.prependIcon() || !!this.prependText());
  }

  public hasAppend(): boolean {
    return (!!this.appendIcon() || !!this.appendText());
  }
}
