import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Component({
  selector: 'tm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {

  @Input()
  public type: string;
  @Input()
  public name: string;
  @Input()
  public label: string;
  @Input()
  public required: boolean;
  @Input()
  public placeholder: string;
  @Input()
  public maxLength: number;
  @Input()
  public pattern: string;
  @Input()
  public tooltipText: string;
  @Input()
  public prependText: string | TemplateRef<any>;
  @Input()
  public prependIcon: string;
  @Input()
  public appendText: string | TemplateRef<any>;
  @Input()
  public appendIcon: string;
  @Input()
  public className: string;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public tooltipIcon: string = 'fas fa-question-circle';
  @Input()
  public small: boolean;
  @Input()
  public disabled: boolean;
  @Input()
  public readOnly: boolean;
  @Input()
  public step: number;
  @Input()
  public min: number;
  @Input()
  public max: number;
  @Input()
  public formGroupClass = true;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();
  @Output()
  public onInput: EventEmitter<Event> = new EventEmitter();
  @Output()
  public prependClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output()
  public appendClick: EventEmitter<MouseEvent> = new EventEmitter();

  public _value: any;
  private onChangeFn = (value) => {};
  private onValidatorChangeFn = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.step || changes.min || changes.max) {
      this.onValidatorChangeFn();
    }
  }

  get value(): any {
    return this._value;
  };

  set value(value: any) {
    if (value !== this._value) {
      this._value = value;
      this.onChangeFn(value);
      this.onValidatorChangeFn()
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errors: ValidationErrors = {};
    if (this.step && this.type === 'number' && this._value && this.mod(Number(this._value), this.step) !== 0) {
      errors.step = `Value must be dividable by ${this.step}`
    }
    if (this.min && this.type === 'number' && this._value < this.min) {
      errors.min = `Minimum value ${this.min}`
    }
    if (this.max && this.type === 'number' && this._value > this.max) {
      errors.max = `Maximum value ${this.max}`
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  private mod(val: number, step: number): number {
    const valDecCount = (val.toString().split('.')[1] || '').length;
    const stepDecCount = (step.toString().split('.')[1] || '').length;
    const decCount = valDecCount > stepDecCount? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace('.',''));
    const stepInt = parseInt(step.toFixed(decCount).replace('.',''));
    return (valInt % stepInt) / Math.pow(10, decCount);
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
