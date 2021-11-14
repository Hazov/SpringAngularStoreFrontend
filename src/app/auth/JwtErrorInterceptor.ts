import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class JwtErrorInterceptor implements HttpInterceptor{
  constructor(private router:Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if(event instanceof HttpResponse){

      }
    },e => {
      if(e instanceof HttpErrorResponse){
        if (e.status === 401){
          this.router.navigate([`/auth`]);
        }
      }
    }));
  }

}
