import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'tm-input-prepend',
  templateUrl: './input-prepend.component.html',
  styleUrls: ['./input-prepend.component.scss']
})
export class InputPrependComponent {

  @Input()
  public icon: string;
  @Input()
  public text: string | TemplateRef<any>;

  public instanceOfTemplateRef(): boolean {
    return this.text instanceof TemplateRef;
  }

  get textAsTemplateRef(): TemplateRef<any> {
    return this.text as TemplateRef<any>;
  }
}
