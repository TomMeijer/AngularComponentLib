import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  public constructor(private authService: AuthService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== this.authService.refreshAccessTokenUrl && this.authService.isAuthenticated()) {
      let accessToken = this.authService.getAccessToken();
      if (this.authService.isTokenExpired(accessToken)) {
        return this.authService.refreshAccessToken().pipe(
          switchMap(response => {
            this.authService.saveNewAuth(response.accessToken, response.refreshToken);
            req = this.setAuthorization(req, response.accessToken);
            return next.handle(req);
          })
        );
      }
      req = this.setAuthorization(req, accessToken);
    }
    return next.handle(req);
  }

  private setAuthorization(req: HttpRequest<any>, accessToken: string): HttpRequest<any> {
    return req.clone({headers: req.headers.set('Authorization', 'Bearer ' + accessToken)});
  }
}
