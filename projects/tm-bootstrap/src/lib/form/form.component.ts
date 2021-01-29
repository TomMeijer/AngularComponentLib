import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TmInput} from "./config/tm-input";
import {InputUtils} from "../input/input-utils";

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  public inputs: TmInput[];
  @Input()
  public model: object = {};
  @Input()
  public small: boolean;
  @Input()
  public submitText: string;
  @Input()
  public submitIcon: string;
  @Input()
  public submitBtnClass: string = 'btn-primary';
  @Input()
  public tooltipIcon: string = 'fas fa-question-circle';
  @Input()
  public showRequiredStar: boolean;
  @Input()
  public submitBtnTemplate: TemplateRef<HTMLElement>;
  @Input()
  public noSubmitBtn: boolean;
  @Input()
  public submitBtnDisabled: boolean;

  @Output()
  public onSubmit: EventEmitter<NgForm> = new EventEmitter();
  @Output()
  public onInput: EventEmitter<NgForm> = new EventEmitter();

  public inputUtils = new InputUtils();
  public wasValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm): void {
    this.wasValidated = !form.valid;
    this.onSubmit.emit(form);
  }

}
