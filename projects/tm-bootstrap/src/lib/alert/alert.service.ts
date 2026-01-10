import {Alert} from './alert';
import {AlertType} from './alert-type.enum';
import {Injectable, signal} from '@angular/core';

const DEFAULT_TIMEOUT = 3500;

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _alerts = signal<Alert[]>([]);
  public alerts = this._alerts.asReadonly();

  constructor() { }

  public show(message: string, type: AlertType, timeout?: number): void {
    this._alerts.update(alerts => [...alerts, {message: message, type: type, timeout: timeout}]);
    if (this._alerts().length > 1) {
      this.dismissPrevious();
    }
  }

  private dismissPrevious(): void {
    const alerts = this._alerts();
    const previousAlert = alerts[alerts.length - 2];
    setTimeout(() => this.dismiss(previousAlert), DEFAULT_TIMEOUT);
  }

  public showSuccess(message: string, timeout = DEFAULT_TIMEOUT): void {
    this.show(message, AlertType.Success, timeout);
  }

  public showDanger(message: string, timeout?: number): void {
    this.show(message, AlertType.Danger, timeout);
  }

  public showInfo(message: string, timeout?: number): void {
    this.show(message, AlertType.Info, timeout);
  }

  public showWarning(message: string, timeout?: number): void {
    this.show(message, AlertType.Warning, timeout);
  }

  public dismiss(dismissedAlert: Alert): void {
    this._alerts.update(alerts => alerts.filter(alert => alert !== dismissedAlert));
  }

  public clear(): void {
    this._alerts.set([]);
  }
}
