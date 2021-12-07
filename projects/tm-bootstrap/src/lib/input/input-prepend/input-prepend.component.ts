import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'tm-input-prepend',
  templateUrl: './input-prepend.component.html',
  styleUrls: ['./input-prepend.component.scss']
})
export class InputPrependComponent implements OnInit {

  @Input()
  public icon: string;
  @Input()
  public text: string | TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public instanceOfTemplateRef(): boolean {
    return this.text instanceof TemplateRef;
  }

}
