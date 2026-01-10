import {Component, EventEmitter, forwardRef, Input, Output, TemplateRef} from '@angular/core';
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
  @Input()
  public name: string;
  @Input()
  public label: string | TemplateRef<any>;
  @Input()
  public required: boolean;
  @Input()
  public placeholder: string;
  @Input()
  public maxLength: number;
  @Input()
  public tooltipText: string;
  @Input()
  public tooltipIcon = 'bi bi-question-circle';
  @Input()
  public className: string;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public small: boolean;
  @Input()
  public textareaRows: number;
  @Input()
  public disabled: boolean;
  @Input()
  public readOnly: boolean;
  @Input()
  public validationFn: (control: AbstractControl) => ValidationErrors | null;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();
  @Output()
  public onInput: EventEmitter<Event> = new EventEmitter();

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
}
