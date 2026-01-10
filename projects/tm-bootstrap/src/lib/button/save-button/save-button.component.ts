import {Component, input} from '@angular/core';
import {SpinnerButtonComponent} from '../spinner-button/spinner-button.component';

@Component({
  selector: 'tm-save-button',
  standalone: true,
  imports: [
    SpinnerButtonComponent
  ],
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent {
  public submitting = input<boolean>();
  public changed = input<boolean>();
}
