import {Component, inject} from '@angular/core';
import {AlertService} from '../alert.service';
import {Alert} from '../alert';
import {AlertModule} from 'ngx-bootstrap/alert';

@Component({
  selector: 'tm-alert-output',
  standalone: true,
  imports: [
    AlertModule
  ],
  templateUrl: './alert-output.component.html',
  styleUrls: ['./alert-output.component.scss']
})
export class AlertOutputComponent {
  private alertService = inject(AlertService);

  get alerts(): Alert[] {
    return this.alertService.alerts();
  }

  public handleClose(closedAlert: Alert): void {
    this.alertService.dismiss(closedAlert);
  }
}
