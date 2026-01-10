import {Component, ElementRef, HostListener, input, output, viewChild} from '@angular/core';
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
  public confirmDialogContainer = viewChild<ElementRef>('confirmDialogContainer');

  public show = input<boolean>();
  public left = input<boolean>();
  public text = input('Are you sure?');
  public subText = input<string>();
  public width = input<string>();
  public requiredUserInput = input<string>();

  public onConfirm = output<void>();
  public onCancel = output<void>();
  public outsideClick = output<void>();

  public userInput: string;

  @HostListener('document:click', ['$event'])
  public click(event: any): void {
    const clickedInside = this.confirmDialogContainer().nativeElement.contains(event.target);
    if (!clickedInside) {
      this.outsideClick.emit();
    }
  }
}
