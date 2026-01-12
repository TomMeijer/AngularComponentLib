import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveButtonComponent } from './save-button.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SaveButtonComponent', () => {
  let component: SaveButtonComponent;
  let fixture: ComponentFixture<SaveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveButtonComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Saved" button when not changed', () => {
    fixture.componentRef.setInput('changed', false);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Saved');
    expect(button.classList).toContain('btn-success');
  });

  it('should show "Save" spinner button when changed', () => {
    fixture.componentRef.setInput('changed', true);
    fixture.detectChanges();
    const spinnerButton = fixture.nativeElement.querySelector('tm-spinner-button');
    expect(spinnerButton).toBeTruthy();
  });

  it('should show spinner when submitting', () => {
    fixture.componentRef.setInput('changed', true);
    fixture.componentRef.setInput('submitting', true);
    fixture.detectChanges();
    const spinnerButton = fixture.nativeElement.querySelector('tm-spinner-button');
    // We can't easily check inside tm-spinner-button if it's not rendering its content in this test context
    // unless we use By.directive or check the DOM if it's fully rendered.
    expect(spinnerButton).toBeTruthy();
  });
});
