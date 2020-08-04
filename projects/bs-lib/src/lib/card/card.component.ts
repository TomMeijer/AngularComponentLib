import {Component, Input, OnInit} from '@angular/core';

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
  public footerText: string;
  @Input()
  public footerIcon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
