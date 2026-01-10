import {Component, forwardRef, input, output, TemplateRef} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {LabelComponent} from '../label/label.component';
import {InputGroupTextComponent} from '../input-group-text/input-group-text.component';
import {NgSelectModule} from '@ng-select/ng-select';

@Component({
  selector: 'tm-ng-select',
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    FormsModule,
    LabelComponent,
    InputGroupTextComponent,
    NgSelectModule
  ],
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgSelectComponent),
      multi: true
    }
  ]
})
export class NgSelectComponent implements ControlValueAccessor, Validator {
  public label = input<string | TemplateRef<any>>();
  public name = input<string>();
  public required = input<boolean>();
  public placeholder = input<string>();
  public tooltipText = input<string>();
  public tooltipIcon = input('bi bi-question-circle');
  public prependText = input<string | TemplateRef<any>>();
  public prependIcon = input<string>();
  public appendText = input<string | TemplateRef<any>>();
  public appendIcon = input<string>();
  public className = input<string>();
  public showRequiredStar = input<boolean>();
  public small = input<boolean>();
  public items = input<any[] | Observable<any[]>>();
  public bindLabel = input<string>();
  public bindValue = input<string>();
  public clearable = input<boolean>();
  public searchable = input<boolean>();
  public optionTemplate = input<TemplateRef<any>>();
  public labelTemplate = input<TemplateRef<any>>();
  public searchFn = input<(term: string, item: any) => boolean>();
  public typeAhead = input<Subject<string>>();
  public minTermLength = input(2);
  public disabled = input<boolean>();
  public validationFn = input<(control: AbstractControl) => ValidationErrors | null>();

  public onChange = output<any>();
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

  public getSelectItems(): Observable<any[]> {
    return Array.isArray(this.items()) ? of(this.items() as any[]) : (this.items() as Observable<any[]>);
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
