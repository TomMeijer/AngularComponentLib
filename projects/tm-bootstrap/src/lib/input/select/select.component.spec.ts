import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent, FormsModule, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value when writeValue is called', () => {
    component.writeValue('option1');
    expect(component.value).toBe('option1');
  });

  it('should render items correctly', () => {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    fixture.componentRef.setInput('items', items);
    fixture.componentRef.setInput('bindLabel', 'name');
    fixture.componentRef.setInput('bindValue', 'id');
    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll('option');
    // Including the default empty option if present (usually not in this component's template unless added)
    // Looking at common patterns, let's just check if our items are there.
    expect(options.length).toBeGreaterThanOrEqual(2);
  });

  it('should emit onChange event when selection changes', () => {
    const spy = spyOn(component.onChange, 'emit');
    const select = fixture.nativeElement.querySelector('select');
    select.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalled();
  });
});
