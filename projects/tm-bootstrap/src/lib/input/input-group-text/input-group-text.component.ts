import {Component, input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'tm-input-group-text',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './input-group-text.component.html',
  styleUrls: ['./input-group-text.component.scss']
})
export class InputGroupTextComponent {
  public icon = input<string>();
  public text = input<string | TemplateRef<any>>();

  public instanceOfTemplateRef(): boolean {
    return this.text() instanceof TemplateRef;
  }

  get textAsTemplateRef(): TemplateRef<any> {
    return this.text() as TemplateRef<any>;
  }
}
