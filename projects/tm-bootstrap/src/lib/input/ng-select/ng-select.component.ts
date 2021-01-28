import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputUtils} from "../input-utils";
import {TmNgSelect} from "../../form/config/tm-ng-select";
import {Observable, of, Subject} from "rxjs";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'tm-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class NgSelectComponent implements OnInit {

  @Input()
  public model: object;
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
  public prependText: string | (() => any);
  @Input()
  public prependIcon: string | (() => string);
  @Input()
  public appendText: string | (() => any);
  @Input()
  public appendIcon: string | (() => string);
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

  @Output()
  public onChange: EventEmitter<any> = new EventEmitter();
  @Output()
  public onInput: EventEmitter<any> = new EventEmitter();

  public inputUtils = new InputUtils();

  constructor() { }

  ngOnInit(): void {
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
