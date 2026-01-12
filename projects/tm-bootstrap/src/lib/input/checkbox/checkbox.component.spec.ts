import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent, FormsModule, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value when writeValue is called', () => {
    component.writeValue(true);
    expect(component.value).toBeTrue();
    component.writeValue(false);
    expect(component.value).toBeFalse();
  });

  it('should call onChangeFn when value is set', () => {
    const spy = spyOn<any>(component, 'onChangeFn');
    component.value = true;
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should reflect value change in the checkbox element', async () => {
    component.writeValue(true);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(input.checked).toBeTrue();

    input.click();
    fixture.detectChanges();
    expect(component.value).toBeFalse();
  });

  it('should validate correctly with custom validationFn', () => {
    fixture.componentRef.setInput('validationFn', (control: any) => control.value ? null : { required: true });
    const control = new FormControl(false);
    const errors = component.validate(control);
    expect(errors).toEqual({ required: true });

    control.setValue(true);
    const noErrors = component.validate(control);
    expect(noErrors).toBeNull();
  });
});
