import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputUtils} from "../input-utils";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'tm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class CheckboxComponent implements OnInit {

  @Input()
  public model: object;
  @Input()
  public label: string;
  @Input()
  public name: string;
  @Input()
  public required: boolean;
  @Input()
  public tooltipText: string;
  @Input()
  public className: string;
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public tooltipIcon: string = 'fas fa-question-circle';
  @Input()
  public disabled: boolean;

  @Output()
  public onChange: EventEmitter<Event> = new EventEmitter();

  public inputUtils = new InputUtils();

  constructor() { }

  ngOnInit(): void {
  }

}
