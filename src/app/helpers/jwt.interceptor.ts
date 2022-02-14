import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { observable, Observable, of, throwError } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }


    

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        // add authorization header with jwt token if available

        let currentUser = this.authenticationService.currentUserValue();
    
      
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}