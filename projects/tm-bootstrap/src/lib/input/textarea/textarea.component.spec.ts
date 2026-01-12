import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaComponent } from './textarea.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaComponent, FormsModule, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value when writeValue is called', () => {
    component.writeValue('long text');
    expect(component.value).toBe('long text');
  });

  it('should reflect value in textarea element', async () => {
    component.value = 'initial text';
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.value).toBe('initial text');

    textarea.value = 'updated text';
    textarea.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.value).toBe('updated text');
  });

  it('should set rows attribute if provided', () => {
    fixture.componentRef.setInput('textareaRows', 5);
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.rows).toBe(5);
  });
});
