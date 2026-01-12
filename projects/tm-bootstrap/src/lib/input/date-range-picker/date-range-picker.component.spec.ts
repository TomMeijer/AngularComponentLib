import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateRangePickerComponent } from './date-range-picker.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DateRangePickerComponent', () => {
  let component: DateRangePickerComponent;
  let fixture: ComponentFixture<DateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DateRangePickerComponent,
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value when writeValue is called', () => {
    const dates = [new Date(), new Date()];
    component.writeValue(dates);
    expect(component.value).toEqual(dates);
  });

  it('should validate minDate', () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 1);
    fixture.componentRef.setInput('minDate', minDate);
    fixture.detectChanges();

    const tooEarly = new Date();
    tooEarly.setDate(tooEarly.getDate() - 2);
    component.writeValue([tooEarly, new Date()]);

    const errors = component.validate({} as any);
    expect(errors?.['minDate']).toBeTruthy();
  });

  it('should validate maxDate', () => {
    const maxDate = new Date();
    fixture.componentRef.setInput('maxDate', maxDate);
    fixture.detectChanges();

    const tooLate = new Date();
    tooLate.setDate(tooLate.getDate() + 1);
    component.writeValue([new Date(), tooLate]);

    const errors = component.validate({} as any);
    expect(errors?.['maxDate']).toBeTruthy();
  });
});
