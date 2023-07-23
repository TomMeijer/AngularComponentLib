import {Component, Input} from '@angular/core';

@Component({
  selector: 'tm-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent {
  @Input()
  public submitting: boolean;
  @Input()
  public changed: boolean;
}
