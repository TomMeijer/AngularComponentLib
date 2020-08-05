import {Component, Input, OnInit} from '@angular/core';
import {TmCardAction} from "./config/tm-card-action";

@Component({
  selector: 'tm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public className: string;
  @Input()
  public headerText: string;
  @Input()
  public headerIcon: string;
  @Input()
  public headerSubText: string;
  @Input()
  public footerText: string;
  @Input()
  public footerIcon: string;
  @Input()
  public actions: TmCardAction[];

  constructor() { }

  ngOnInit(): void {
  }

}
