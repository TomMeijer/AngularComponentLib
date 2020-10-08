import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tm-input-prepend',
  templateUrl: './input-prepend.component.html',
  styleUrls: ['./input-prepend.component.css']
})
export class InputPrependComponent implements OnInit {

  @Input()
  public icon: string | (() => string);
  @Input()
  public text: string | (() => any);

  constructor() { }

  ngOnInit(): void {
  }

  public getIcon(): string {
    return typeof this.icon === 'string' ? this.icon : this.icon();
  }

  public getText(): any {
    return typeof this.text === 'string' ? this.text : this.text();
  }

}
