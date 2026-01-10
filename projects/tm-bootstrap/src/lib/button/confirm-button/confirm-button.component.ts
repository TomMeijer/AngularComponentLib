import {Component, input, output} from '@angular/core';
import {ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog.component';
import {SpinnerButtonComponent} from '../spinner-button/spinner-button.component';

@Component({
  selector: 'tm-confirm-button',
  standalone: true,
  imports: [
    ConfirmDialogComponent,
    SpinnerButtonComponent
  ],
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent {
  public spin = input<boolean>();
  public className = input<string>();
  public text = input<string>();
  public icon = input<string>();
  public displayAsIcon = input<boolean>();
  public leftDialog = input<boolean>();
  public confirmText = input('Are you sure?');
  public subText = input<string>();
  public dialogWidth = input<string>();
  public requiredUserInput = input<string>();

  public onConfirm = output<void>();
  public onCancel = output<void>();

  public showConfirmDialog = false;

  public toggleConfirmDialog(): void {
    if (this.spin()) {
      return;
    }
    this.showConfirmDialog = !this.showConfirmDialog;
  }

  public confirm(): void {
    this.showConfirmDialog = false;
    this.onConfirm.emit();
  }

  public cancel(): void {
    this.showConfirmDialog = false;
    this.onCancel.emit();
  }
}
