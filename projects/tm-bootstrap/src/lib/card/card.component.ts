import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'tm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public headerTitle: string;
  @Input()
  public headerIcon: string;
  @Input()
  public headerSubtitle: string;
  @Input()
  public headerTemplate: TemplateRef<any>;
  @Input()
  public footerText: string;
  @Input()
  public footerIcon: string;
  @Input()
  public imgTopSrc: string;
  @Input()
  public imgBottomSrc: string;
  @Input()
  public footerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public hasHeader(): boolean {
    return !!this.headerTemplate || !!this.headerTitle || !!this.headerIcon;
  }

  public hasFooter(): boolean {
    return !!this.footerTemplate || !!this.footerText || !!this.footerIcon;
  }

}
