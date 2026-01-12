import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onConfirm and close when confirm button is clicked', () => {
    const spy = spyOn(component.onConfirm, 'emit');
    fixture.componentRef.setInput('show', true);
    fixture.detectChanges();

    const confirmBtn = fixture.debugElement.query(By.css('.btn-success')).nativeElement;
    confirmBtn.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit onCancel and close when cancel button is clicked', () => {
    const spy = spyOn(component.onCancel, 'emit');
    fixture.componentRef.setInput('show', true);
    fixture.detectChanges();

    const cancelBtn = fixture.debugElement.query(By.css('.btn-danger')).nativeElement;
    cancelBtn.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should require specific user input to enable confirm button if requiredUserInput is provided', async () => {
    fixture.componentRef.setInput('show', true);
    fixture.componentRef.setInput('requiredUserInput', 'DELETE');
    fixture.detectChanges();

    const confirmBtn = fixture.debugElement.query(By.css('.btn-success')).nativeElement;
    expect(confirmBtn.disabled).toBeTrue();

    component.userInput = 'DELETE';
    await fixture.whenStable();
    fixture.detectChanges();

    expect(confirmBtn.disabled).toBeFalse();
  });

  it('should emit outsideClick when clicking outside the dialog', () => {
    const spy = spyOn(component.outsideClick, 'emit');
    fixture.componentRef.setInput('show', true);
    fixture.detectChanges();

    document.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalled();
  });
});
