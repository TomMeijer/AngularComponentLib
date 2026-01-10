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
import {LabelComponent} from '../label/label.component';

@Component({
  selector: 'tm-textarea',
  standalone: true,
  imports: [
    FormsModule,
    LabelComponent
  ],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor, Validator {
  public name = input<string>();
  public label = input<string | TemplateRef<any>>();
  public required = input<boolean>();
  public placeholder = input<string>();
  public maxLength = input<number>();
  public tooltipText = input<string>();
  public tooltipIcon = input('bi bi-question-circle');
  public className = input<string>();
  public showRequiredStar = input<boolean>();
  public small = input<boolean>();
  public textareaRows = input<number>();
  public disabled = input<boolean>();
  public readOnly = input<boolean>();
  public validationFn = input<(control: AbstractControl) => ValidationErrors | null>();

  public onChange = output<Event>();
  public onInput = output<Event>();

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
}
