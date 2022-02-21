import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { observable, Observable, of, throwError } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { GlobalService } from '../services/api.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,
        private gs: GlobalService ) { }


    

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        // add authorization header with jwt token if available

        let currentUser = this.gs.getUserInfo();
      
      
        if (currentUser !== undefined) {
           
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser[0]['token']}`
                }
            });
        }

        return next.handle(request);
    }
}