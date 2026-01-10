import {Component, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'tm-label',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    TooltipModule
  ],
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
