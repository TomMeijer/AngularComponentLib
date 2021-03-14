import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputUtils} from "../input-utils";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'tm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class InputComponent implements OnInit {

  @Input()
  public model: object;
  @Input()
  public type: string;
  @Input()
  public label: string;
  @Input()
  public name: string;
  @Input()
  public required: boolean;
  @Input()
  public placeholder: string;
  @Input()
  public maxLength: number;
  @Input()
  public pattern: string;
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
  public disabled: boolean;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();

  public inputUtils = new InputUtils();

  constructor() { }

  ngOnInit(): void {
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
