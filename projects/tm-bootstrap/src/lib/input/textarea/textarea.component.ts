import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputUtils} from "../input-utils";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'tm-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class TextareaComponent implements OnInit {

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
  public maxLength: number;
  @Input()
  public tooltipText: string;
  @Input()
  public className: string;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public tooltipIcon: string = 'fas fa-question-circle';
  @Input()
  public small: boolean;
  @Input()
  public textareaRows: number;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();

  public inputUtils = new InputUtils();

  constructor() { }

  ngOnInit(): void {
  }

}
