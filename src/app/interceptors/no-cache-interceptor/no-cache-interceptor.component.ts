import { Component } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-no-cache-interceptor',
  templateUrl: './no-cache-interceptor.component.html',
  styleUrls: ['./no-cache-interceptor.component.css']
})
export class NoCacheInterceptorComponent implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('Cache-Control', 'no-cache')
        .set('Pragma', 'no-cache')
        .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT')
    });
    return next.handle(modifiedReq);
  }
}
