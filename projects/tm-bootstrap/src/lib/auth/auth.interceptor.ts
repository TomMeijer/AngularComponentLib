import {inject} from '@angular/core';
import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {AuthService} from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);

  if (req.url !== authService.refreshAccessTokenUrl && authService.isAuthenticated()) {
    const accessToken = authService.getAccessToken();
    if (authService.isTokenExpired(accessToken)) {
      return authService.refreshAccessToken().pipe(
        switchMap(response => {
          authService.saveNewAuth(response.accessToken, response.refreshToken);
          const authorizedReq = setAuthorization(req, response.accessToken);
          return next(authorizedReq);
        })
      );
    }
    req = setAuthorization(req, accessToken);
  }
  return next(req);
};

function setAuthorization(req: HttpRequest<any>, accessToken: string): HttpRequest<any> {
  return req.clone({headers: req.headers.set('Authorization', 'Bearer ' + accessToken)});
}
