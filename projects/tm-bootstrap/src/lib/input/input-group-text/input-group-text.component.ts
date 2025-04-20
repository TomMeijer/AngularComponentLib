import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'tm-input-group-text',
  standalone: false,
  templateUrl: './input-group-text.component.html',
  styleUrls: ['./input-group-text.component.scss']
})
export class InputGroupTextComponent {
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
