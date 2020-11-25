import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {TmCardAction} from "./config/tm-card-action";

@Component({
  selector: 'tm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public headerText: string;
  @Input()
  public headerIcon: string;
  @Input()
  public headerSubText: string;
  @Input()
  public headerTemplate: TemplateRef<HTMLElement>;
  @Input()
  public footerText: string;
  @Input()
  public footerIcon: string;
  @Input()
  public actions: TmCardAction[];
  @Input()
  public imgTopSrc: string;
  @Input()
  public imgBottomSrc: string;
  @Input()
  public footerTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  public hasHeader(): boolean {
    return !!this.headerTemplate || !!this.headerText || !!this.headerIcon;
  }

  public hasFooter(): boolean {
    return !!this.footerTemplate || !!this.footerText || !!this.footerIcon;
  }

}
