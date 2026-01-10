import {Component, input, TemplateRef} from '@angular/core';
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
  public text = input<string | TemplateRef<any>>();
  public required = input<boolean>();
  public tooltipText = input<string>();
  public tooltipIcon = input<string>();
  public showRequiredStar = input<boolean>();

  public instanceOfTemplateRef(): boolean {
    return this.text() instanceof TemplateRef;
  }

  get textAsTemplateRef(): TemplateRef<any> {
    return this.text() as TemplateRef<any>;
  }
}
