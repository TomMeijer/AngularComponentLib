import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'tm-label',
  standalone: false,
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input()
  public text: string | TemplateRef<any>;
  @Input()
  public required: boolean;
  @Input()
  public tooltipText: string;
  @Input()
  public tooltipIcon: string;
  @Input()
  public showRequiredStar: boolean;

  public instanceOfTemplateRef(): boolean {
    return this.text instanceof TemplateRef;
  }

  get textAsTemplateRef(): TemplateRef<any> {
    return this.text as TemplateRef<any>;
  }
}
