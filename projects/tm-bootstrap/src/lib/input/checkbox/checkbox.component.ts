import {Component, EventEmitter, forwardRef, Input, Output, TemplateRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'tm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {

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
  public tooltipIcon = 'fas fa-question-circle';
  @Input()
  public disabled: boolean;
  @Input()
  public formGroupClass = true;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();

  public _value: any;
  private onChangeFn = (value) => {};

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

  public labelInstanceOfTemplateRef(): boolean {
    return this.label instanceof TemplateRef;
  }

  get labelAsTemplateRef(): TemplateRef<any> {
    return this.label as TemplateRef<any>;
  }
}
