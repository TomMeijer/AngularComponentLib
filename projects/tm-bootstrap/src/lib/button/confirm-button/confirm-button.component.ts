import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tm-confirm-button',
  standalone: false,
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent {
  @Input()
  public spin: boolean;
  @Input()
  public className: string;
  @Input()
  public text: string;
  @Input()
  public icon: string;
  @Input()
  public displayAsIcon: boolean;
  @Input()
  public leftDialog: boolean;
  @Input()
  public confirmText = 'Are you sure?';
  @Input()
  public subText: string;
  @Input()
  public dialogWidth: string;
  @Input()
  public requiredUserInput: string;

  @Output()
  public onConfirm = new EventEmitter<void>();
  @Output()
  public onCancel = new EventEmitter<void>();

  public showConfirmDialog = false;

  public toggleConfirmDialog(): void {
    if (this.spin) {
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
