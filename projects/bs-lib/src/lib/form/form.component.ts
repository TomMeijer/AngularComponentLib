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
  public submitIcon: string;
  @Input()
  public submitBtnClass: string;
  @Input()
  public tooltipIcon: string;
  @Input()
  public isChanged: boolean;
  @Input()
  public isSubmitting: boolean;
  @Input()
  public changedSubmitText: string;
  @Input()
  public changedSubmitIcon: string;

  @Output()
  public onSubmit: EventEmitter<NgForm> = new EventEmitter();
  @Output()
  public onInput: EventEmitter<NgForm> = new EventEmitter();

  public inputGroups: TmInput[][];
  public wasValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.inputGroups = this.getInputGroups();
  }

  public getModelProp(name: string): any {
    return name.split('.').reduce((prev, curr) => prev && prev[curr], this.model);
  }

  public setModelProp(name: string, value: any) {
    let model = this.model;
    let properties = name.split('.');
    let len = properties.length;
    for (let i = 0; i < len - 1; i++) {
      let property = properties[i];
      if (!model[property]) {
        model[property] = {};
      }
      model = model[property];
    }
    model[properties[len - 1]] = value;
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

  private getInputGroups(): any {
    const inputGroups = [];
    const groups = [];
    for (let input of this.inputs) {
      if (!input.group) {
        inputGroups.push([input])
      } else if (!groups.includes(input.group)) {
        inputGroups.push(this.inputs.filter(i => i.group === input.group));
        groups.push(input.group);
      }
    }
    return inputGroups;
  }

}
