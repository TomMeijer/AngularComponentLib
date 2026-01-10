import {Component, input, output} from '@angular/core';

@Component({
  selector: 'tm-spinner-button',
  standalone: true,
  imports: [],
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent {
  public spin = input<boolean>();
  public btnType = input<'submit' | 'button'>('button');
  public className = input<string>();
  public text = input<string>();
  public icon = input<string>();
  public displayAsIcon = input<boolean>();
  public disabled = input<boolean>();

  public onClick = output<Event>();
}
