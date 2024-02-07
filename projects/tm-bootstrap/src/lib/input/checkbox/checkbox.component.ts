import {Component, EventEmitter, forwardRef, Input, Output, TemplateRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'tm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor, Validator {
  @Input()
  public name: string;
  @Input()
  public label: string | TemplateRef<any>;
  @Input()
  public required: boolean;
  @Input()
  public tooltipText: string;
  @Input()
  public className: string;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public tooltipIcon = 'bi bi-question-circle';
  @Input()
  public disabled: boolean;
  @Input()
  public validationFn: (control: AbstractControl) => ValidationErrors | null;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();

  public _value: any;
  private onChangeFn = (value) => {};
  private onValidatorChangeFn = () => {};

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
    if (this.validationFn) {
      const customErrors = this.validationFn(control);
      if (customErrors) {
        errors = {...errors, ...customErrors};
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChangeFn = fn;
  }

  public labelInstanceOfTemplateRef(): boolean {
    return this.label instanceof TemplateRef;
  }

  get labelAsTemplateRef(): TemplateRef<any> {
    return this.label as TemplateRef<any>;
  }
}
