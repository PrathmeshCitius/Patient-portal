import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer');
        console.log(isLoggedIn);


        // get all users
        if (request.url.endsWith('/patientdemo/1') && request.method === 'GET') {
            console.log("hi");
            if (!isLoggedIn) return unauthorised();
            // return next.handle(request);
        }

        // pass through any requests not handled above

        return next.handle(request);


        // private helper functions

        // function ok(body) {
        //     return of(new HttpResponse({ status: 200, body }));
        // }

        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } });
        }
    }
}

