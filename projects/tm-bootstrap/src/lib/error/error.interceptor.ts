import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {inject} from '@angular/core';
import {AlertService} from '../alert/alert.service';

const DEFAULT_ERROR_MSG = 'Something went wrong. Please try again later or contact support.'

export const ErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const alertService = inject(AlertService);

  return next(req).pipe(
    catchError(response => {
      const msg = getErrorMsg(response);
      alertService.showDanger(msg);
      return throwError(() => response);
    })
  );
};

function getErrorMsg(response: any): string {
  if (response.error) {
    const error = response.error;
    if (error.detail) {
      return error.detail;
    }
    if (error.message) {
      return error.message;
    }
  }
  return DEFAULT_ERROR_MSG;
}
