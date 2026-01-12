import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputGroupTextComponent } from './input-group-text.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('InputGroupTextComponent', () => {
  let component: InputGroupTextComponent;
  let fixture: ComponentFixture<InputGroupTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroupTextComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputGroupTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text when text input is provided', () => {
    fixture.componentRef.setInput('text', 'Test Text');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Test Text');
  });

  it('should display icon when icon input is provided', () => {
    fixture.componentRef.setInput('icon', 'bi-person');
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('i');
    expect(icon).toBeTruthy();
    expect(icon.classList).toContain('bi-person');
  });
});
