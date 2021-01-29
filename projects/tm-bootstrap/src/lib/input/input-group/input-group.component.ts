import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TmInput} from "../../form/config/tm-input";

@Component({
  selector: 'tm-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  @Input()
  public inputs: TmInput[];
  @Input()
  public model: object = {};
  @Input()
  public small: boolean;
  @Input()
  public tooltipIcon: string = 'fas fa-question-circle';
  @Input()
  public showRequiredStar: boolean;

  public inputGroups: TmInput[][];

  constructor() { }

  ngOnInit(): void {
    this.inputGroups = this.inputs ? this.getInputGroups() : [];
  }

  private getInputGroups(): TmInput[][] {
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

  public changeInput(input: TmInput, event: any): void {
    if (input.onChange) {
      input.onChange(event);
    }
  }

  public containsDisplayable(group: TmInput[]): boolean {
    return group.findIndex(input => !input.hidden) !== -1;
  }

}
