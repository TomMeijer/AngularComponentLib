import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tm-spinner-button',
  standalone: false,
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent {
  @Input()
  public spin: boolean;
  @Input()
  public btnType: 'submit' | 'button' = 'button';
  @Input()
  public className: string;
  @Input()
  public text: string;
  @Input()
  public icon: string;
  @Input()
  public displayAsIcon: boolean;
  @Input()
  public disabled: boolean;

  @Output()
  public onClick = new EventEmitter<Event>();
}
