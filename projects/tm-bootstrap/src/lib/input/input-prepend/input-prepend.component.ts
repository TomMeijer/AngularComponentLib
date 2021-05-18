import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tm-input-prepend',
  templateUrl: './input-prepend.component.html',
  styleUrls: ['./input-prepend.component.scss']
})
export class InputPrependComponent implements OnInit {

  @Input()
  public icon: string;
  @Input()
  public text: string;

  constructor() { }

  ngOnInit(): void {
  }
}
