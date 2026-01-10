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
  @Input()
  public name: string;
  @Input()
  public label: string | TemplateRef<any>;
  @Input()
  public required: boolean;
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
  public className: string;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public small: boolean;
  @Input()
  public items: any[];
  @Input()
  public bindLabel: string;
  @Input()
  public bindValue: string;
  @Input()
  public disabled: boolean;
  @Input()
  public validationFn: (control: AbstractControl) => ValidationErrors | null;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();
  @Output()
  public prependClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output()
  public appendClick: EventEmitter<MouseEvent> = new EventEmitter();

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
