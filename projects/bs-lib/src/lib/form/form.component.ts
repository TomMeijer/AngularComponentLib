import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TmInput} from "./config/tm-input";

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  public inputs: TmInput[];
  @Input()
  public model: any;
  @Input()
  public className: string;
  @Input()
  public small: boolean;
  @Input()
  public submitText: string;
  @Input()
  public submitBtnClass: string;

  @Output()
  public onSubmit: EventEmitter<NgForm> = new EventEmitter();

  public wasValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm): void {
    this.wasValidated = !form.valid;
    this.onSubmit.emit(form);
  }

  public changeInput(input: TmInput, event: Event): void {
    if (input.onChange) {
      input.onChange(event);
    }
  }

}
