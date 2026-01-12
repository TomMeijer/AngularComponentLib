import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, FormsModule, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value when writeValue is called', () => {
    component.writeValue('test');
    expect(component.value).toBe('test');
  });

  it('should call onChangeFn when value is set', () => {
    const spy = spyOn<any>(component, 'onChangeFn');
    component.value = 'new value';
    expect(spy).toHaveBeenCalledWith('new value');
  });

  it('should show prepend and append elements if provided', () => {
    fixture.componentRef.setInput('prependText', 'Prefix');
    fixture.componentRef.setInput('appendText', 'Suffix');
    fixture.detectChanges();

    expect(component.isInputGroup()).toBeTrue();
    const prepend = fixture.nativeElement.querySelector('tm-input-group-text');
    expect(prepend).toBeTruthy();
    expect(prepend.textContent).toContain('Prefix');
  });

  it('should validate number constraints (min, max, step)', () => {
    fixture.componentRef.setInput('type', 'number');
    fixture.componentRef.setInput('min', 5);
    fixture.componentRef.setInput('max', 10);
    fixture.componentRef.setInput('step', 2);
    fixture.detectChanges();

    const control = new FormControl(4);
    component.writeValue(4);
    let errors = component.validate(control);
    expect(errors?.['min']).toBeTruthy();

    component.writeValue(11);
    errors = component.validate(control);
    expect(errors?.['max']).toBeTruthy();

    component.writeValue(7);
    errors = component.validate(control);
    expect(errors?.['step']).toBeTruthy(); // 7 % 2 != 0 if step logic is as implemented

    component.writeValue(6);
    errors = component.validate(control);
    expect(errors).toBeNull();
  });

  it('should emit onInput and onChange events', () => {
    const onInputSpy = spyOn(component.onInput, 'emit');
    const onChangeSpy = spyOn(component.onChange, 'emit');

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));

    expect(onInputSpy).toHaveBeenCalled();
    expect(onChangeSpy).toHaveBeenCalled();
  });
});
