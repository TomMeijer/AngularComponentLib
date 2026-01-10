import {Component, forwardRef, input, output, TemplateRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'tm-checkbox',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FormsModule,
    TooltipModule
  ],
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
  public name = input<string>();
  public label = input<string | TemplateRef<any>>();
  public required = input<boolean>();
  public tooltipText = input<string>();
  public className = input<string>();
  public showRequiredStar = input<boolean>();
  public tooltipIcon = input('bi bi-question-circle');
  public disabled = input<boolean>();
  public validationFn = input<(control: AbstractControl) => ValidationErrors | null>();

  public onChange = output<Event>();

  public _value: any;
  private onChangeFn = (value: any) => {};
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
    if (this.validationFn()) {
      const customErrors = this.validationFn()(control);
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
    return this.label() instanceof TemplateRef;
  }

  get labelAsTemplateRef(): TemplateRef<any> {
    return this.label() as TemplateRef<any>;
  }
}
