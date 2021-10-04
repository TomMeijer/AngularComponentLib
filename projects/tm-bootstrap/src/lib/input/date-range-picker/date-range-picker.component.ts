import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BsDaterangepickerConfig, BsDaterangepickerDirective} from "ngx-bootstrap/datepicker";
import {BsCustomDates} from "ngx-bootstrap/datepicker/themes/bs/bs-custom-dates-view.component";
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {DateUtils} from "../../utils/date-utils";

@Component({
  selector: 'tm-date-range-picker',
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
export class DateRangePickerComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {

  @ViewChild('dateRangePicker', {static: false})
  public dateRangePicker: BsDaterangepickerDirective;

  @Input()
  public label: string;
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
  public tooltipIcon: string = 'fas fa-question-circle';
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
  public ranges: BsCustomDates[];

  private datePipe = new DatePipe('en-US');
  public config: Partial<BsDaterangepickerConfig> = {
    rangeInputFormat: 'DD-MM-YYYY',
    showWeekNumbers: false,
    containerClass: 'tm-datepicker',
    rangeSeparator: ' / ',
  };
  public errors: ValidationErrors;
  public _value: Date[];
  private onChangeFn = (value) => {};
  private onValidatorChangeFn = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.maxDays && changes.maxDays.currentValue) {
      this.config.maxDateRange = this.maxDays;
      this.updateConfig();
    }
    if (changes.ranges && changes.ranges.currentValue) {
      this.config.ranges = this.ranges;
      this.updateConfig();
    }
    if (changes.required || changes.minDate || changes.maxDate || changes.maxDays) {
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
  };

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
    let valid = true;
    let error: string = null;
    if (!this.isValid()) {
      valid = false;
    } else if (!this.isMinDateValid()) {
      valid = false;
      error = `Start date must be after ${this.datePipe.transform(DateUtils.addDays(this.minDate, -1), 'dd-MM-yyyy')}`
    } else if (!this.isMaxDateValid()) {
      valid = false;
      error = `End date must be before ${this.datePipe.transform(DateUtils.addDays(this.maxDate, 1), 'dd-MM-yyyy')}`
    } else if (!this.isMaxDaysValid()) {
      valid = false;
      error = `Maximum of ${this.maxDays} days allowed`
    }
    this.errors = !valid ? {invalid: true, message: error} : null;
    return this.errors;
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
}
