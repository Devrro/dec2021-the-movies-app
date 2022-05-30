import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private token = `${environment.API_token}`;
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(this.token);
    const requestAPI = this.addToken(request, this.token)
    console.log(requestAPI);
    return next.handle(requestAPI);
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }
}
