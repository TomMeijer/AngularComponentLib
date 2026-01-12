import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerButtonComponent } from './spinner-button.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SpinnerButtonComponent', () => {
  let component: SpinnerButtonComponent;
  let fixture: ComponentFixture<SpinnerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerButtonComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick event when button is clicked', () => {
    const spy = spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should be disabled when disabled input is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();
  });

  it('should show spinner when spin input is true', () => {
    fixture.componentRef.setInput('spin', true);
    fixture.detectChanges();
    const spinner = fixture.nativeElement.querySelector('.spinner-border');
    expect(spinner).toBeTruthy();
  });

  it('should show text when text input is provided', () => {
    fixture.componentRef.setInput('text', 'Click me');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Click me');
  });

  it('should show icon when icon input is provided', () => {
    fixture.componentRef.setInput('icon', 'fa-save');
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('.fa-save');
    expect(icon).toBeTruthy();
  });
});
