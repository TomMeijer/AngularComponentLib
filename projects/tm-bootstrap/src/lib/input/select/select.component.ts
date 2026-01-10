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
import {InputGroupTextComponent} from '../input-group-text/input-group-text.component';

@Component({
  selector: 'tm-select',
  standalone: true,
  imports: [
    FormsModule,
    LabelComponent,
    InputGroupTextComponent
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor, Validator {
  public name = input<string>();
  public label = input<string | TemplateRef<any>>();
  public required = input<boolean>();
  public tooltipText = input<string>();
  public tooltipIcon = input('bi bi-question-circle');
  public prependText = input<string | TemplateRef<any>>();
  public prependIcon = input<string>();
  public appendText = input<string | TemplateRef<any>>();
  public appendIcon = input<string>();
  public className = input<string>();
  public showRequiredStar = input<boolean>();
  public small = input<boolean>();
  public items = input<any[]>();
  public bindLabel = input<string>();
  public bindValue = input<string>();
  public disabled = input<boolean>();
  public validationFn = input<(control: AbstractControl) => ValidationErrors | null>();

  public onChange = output<Event>();
  public prependClick = output<MouseEvent>();
  public appendClick = output<MouseEvent>();

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
