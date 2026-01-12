import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmButtonComponent } from './confirm-button.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ConfirmButtonComponent', () => {
  let component: ConfirmButtonComponent;
  let fixture: ComponentFixture<ConfirmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmButtonComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle confirm dialog when button is clicked', () => {
    expect(component.showConfirmDialog).toBeFalse();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.showConfirmDialog).toBeTrue();
    button.click();
    expect(component.showConfirmDialog).toBeFalse();
  });

  it('should not toggle confirm dialog when spinning', () => {
    fixture.componentRef.setInput('spin', true);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.showConfirmDialog).toBeFalse();
  });

  it('should emit onConfirm and close dialog when confirm is called', () => {
    const spy = spyOn(component.onConfirm, 'emit');
    component.showConfirmDialog = true;
    component.confirm();
    expect(spy).toHaveBeenCalled();
    expect(component.showConfirmDialog).toBeFalse();
  });

  it('should emit onCancel and close dialog when cancel is called', () => {
    const spy = spyOn(component.onCancel, 'emit');
    component.showConfirmDialog = true;
    component.cancel();
    expect(spy).toHaveBeenCalled();
    expect(component.showConfirmDialog).toBeFalse();
  });
});
