import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'tm-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgSelectComponent),
    multi: true
  }]
})
export class NgSelectComponent implements OnInit, ControlValueAccessor {

  @Input()
  public label: string;
  @Input()
  public name: string;
  @Input()
  public required: boolean;
  @Input()
  public placeholder: string;
  @Input()
  public tooltipText: string;
  @Input()
  public prependText: string;
  @Input()
  public prependIcon: string;
  @Input()
  public appendText: string;
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
  public items: any[] | Observable<any[]>;
  @Input()
  public bindLabel: string;
  @Input()
  public bindValue: string;
  @Input()
  public clearable: boolean;
  @Input()
  public searchable: boolean;
  @Input()
  public optionTemplate: (item) => string;
  @Input()
  public labelTemplate: (item) => string;
  @Input()
  public searchFn: (term: string, item: any) => boolean;
  @Input()
  public typeAhead: Subject<string>;
  @Input()
  public disabled: boolean;

  @Output()
  public onChange: EventEmitter<any> = new EventEmitter();

  public _value: any;
  private onChangeFn = (value) => {};

  constructor() { }

  ngOnInit(): void {
  }

  get value(): any {
    return this._value;
  };

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

  public getSelectItems(): Observable<any[]> {
    return Array.isArray(this.items) ? of(this.items) : this.items;
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
