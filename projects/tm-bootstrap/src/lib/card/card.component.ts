import {Component, input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'tm-card',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public headerTitle = input<string>();
  public headerIcon = input<string>();
  public headerSubtitle = input<string>();
  public headerTemplate = input<TemplateRef<any>>();
  public footerText = input<string>();
  public footerIcon = input<string>();
  public imgTopSrc = input<string>();
  public imgBottomSrc = input<string>();
  public footerTemplate = input<TemplateRef<any>>();
  public className = input<string>();

  public hasHeader(): boolean {
    return !!this.headerTemplate() || !!this.headerTitle() || !!this.headerIcon();
  }

  public hasFooter(): boolean {
    return !!this.footerTemplate() || !!this.footerText() || !!this.footerIcon();
  }
}
