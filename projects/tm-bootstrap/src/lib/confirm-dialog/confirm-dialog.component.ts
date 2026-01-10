import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'tm-confirm-dialog',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @ViewChild('confirmDialogContainer')
  public confirmDialogContainer: ElementRef;

  @Input()
  public show: boolean;
  @Input()
  public left: boolean;
  @Input()
  public text = 'Are you sure?';
  @Input()
  public subText: string;
  @Input()
  public width: string;
  @Input()
  public requiredUserInput: string;

  @Output()
  public onConfirm = new EventEmitter<void>();
  @Output()
  public onCancel = new EventEmitter<void>();
  @Output()
  public outsideClick = new EventEmitter<void>();

  public userInput: string;

  @HostListener('document:click', ['$event'])
  public click(event: any): void {
    const clickedInside = this.confirmDialogContainer.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.outsideClick.emit();
    }
  }
}
