import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tm-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input()
  public text: string;
  @Input()
  public required: boolean;
  @Input()
  public tooltipText: string;
  @Input()
  public tooltipIcon: string;
  @Input()
  public showRequiredStar: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
