import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tm-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input()
  public text: string;
  @Input()
  public required: boolean;
  @Input()
  public tooltip: string;
  @Input()
  public tooltipIcon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
