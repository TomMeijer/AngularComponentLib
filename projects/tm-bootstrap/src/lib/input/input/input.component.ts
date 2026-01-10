import {Component, effect, forwardRef, input, output, TemplateRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {LabelComponent} from '../label/label.component';
import {InputGroupTextComponent} from '../input-group-text/input-group-text.component';

@Component({
  selector: 'tm-input',
  standalone: true,
  imports: [
    FormsModule,
    LabelComponent,
    InputGroupTextComponent
  ],
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
export class InputComponent implements ControlValueAccessor, Validator {
  public type = input<string>();
  public name = input<string>();
  public label = input<string | TemplateRef<any>>();
  public required = input<boolean>();
  public placeholder = input<string>();
  public maxLength = input<number>();
  public pattern = input<string>();
  public tooltipText = input<string>();
  public tooltipIcon = input('bi bi-question-circle');
  public prependText = input<string | TemplateRef<any>>();
  public prependIcon = input<string>();
  public appendText = input<string | TemplateRef<any>>();
  public appendIcon = input<string>();
  public className = input<string>();
  public showRequiredStar = input<boolean>();
  public small = input<boolean>();
  public disabled = input<boolean>();
  public readOnly = input<boolean>();
  public step = input<number>();
  public min = input<number>();
  public max = input<number>();
  public validationFn = input<(control: AbstractControl) => ValidationErrors | null>();

  public onChange = output<Event>();
  public onInput = output<Event>();
  public prependClick = output<MouseEvent>();
  public appendClick = output<MouseEvent>();

  public _value: any;
  private onChangeFn = (value: any) => {};
  private onValidatorChangeFn = () => {};

  constructor() {
    effect(() => {
      this.step();
      this.min();
      this.max();
      this.onValidatorChangeFn();
    });
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (value !== this._value) {
      this._value = value;
      this.onChangeFn(value);
      this.onValidatorChangeFn();
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
    if (!this.isEmpty(this.step()) && this.type() === 'number' && !this.isEmpty(this._value) && this.mod(Number(this._value), this.step()) !== 0) {
      errors['step'] = `Value must be dividable by: ${this.step()}`;
    }
    if (!this.isEmpty(this.min()) && this.type() === 'number' && !this.isEmpty(this._value) && Number(this._value) < this.min()) {
      errors['min'] = `Minimum value: ${this.min()}`;
    }
    if (!this.isEmpty(this.max()) && this.type() === 'number' && !this.isEmpty(this._value) && Number(this._value) > this.max()) {
      errors['max'] = `Maximum value: ${this.max()}`;
    }
    if (this.validationFn()) {
      const customErrors = this.validationFn()(control);
      if (customErrors) {
        errors = {...errors, ...customErrors};
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  private isEmpty(value: any): boolean {
    return value === undefined || value === null || value === '';
  }

  private mod(val: number, step: number): number {
    const valDecCount = (val.toString().split('.')[1] || '').length;
    const stepDecCount = (step.toString().split('.')[1] || '').length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace('.', ''));
    const stepInt = parseInt(step.toFixed(decCount).replace('.', ''));
    return (valInt % stepInt) / Math.pow(10, decCount);
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
