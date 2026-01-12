import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertOutputComponent } from './alert-output.component';
import { AlertService } from '../alert.service';
import { AlertType } from '../alert-type.enum';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AlertOutputComponent', () => {
  let component: AlertOutputComponent;
  let fixture: ComponentFixture<AlertOutputComponent>;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertOutputComponent],
      providers: [
        AlertService,
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertOutputComponent);
    component = fixture.componentInstance;
    alertService = TestBed.inject(AlertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display alerts from AlertService', () => {
    alertService.showSuccess('Success message');
    fixture.detectChanges();

    const alertElements = fixture.nativeElement.querySelectorAll('alert');
    expect(alertElements.length).toBe(1);
    expect(alertElements[0].textContent).toContain('Success message');
  });

  it('should call handleClose and dismiss alert when alert is closed', () => {
    const spy = spyOn(alertService, 'dismiss');
    const alert = { message: 'Test alert', type: AlertType.Success };

    component.handleClose(alert);

    expect(spy).toHaveBeenCalledWith(alert);
  });
});
