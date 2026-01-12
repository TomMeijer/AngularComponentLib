import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelComponent } from './label.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text when text input is provided', () => {
    fixture.componentRef.setInput('text', 'Test Label');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Test Label');
  });

  it('should show required star when showRequiredStar and required are true', () => {
    fixture.componentRef.setInput('showRequiredStar', true);
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();
    const star = fixture.nativeElement.querySelector('.required-star');
    expect(star).toBeTruthy();
    expect(star.textContent).toContain('*');
  });

  it('should show tooltip when tooltipText is provided', () => {
    fixture.componentRef.setInput('tooltipText', 'Help info');
    fixture.detectChanges();
    const tooltipIcon = fixture.nativeElement.querySelector('i');
    expect(tooltipIcon).toBeTruthy();
  });
});
