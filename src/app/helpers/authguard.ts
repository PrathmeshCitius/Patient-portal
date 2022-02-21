import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from '../services/api.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


   // userlog = new BehaviorSubject<boolean>(false)
   currentUser:any;
    constructor(
        private router: Router,
        private apiService: GlobalService
    ) {


     }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authService.currentUserValue();
  
        // if (currentUser) {
        //     // logged in so return true
        //     return true;
        // }

     
        this.apiService.setLoggedInUser().subscribe((res)=>{

            if(Object.values(res).length == 0)
            {   

                
                this.router.navigateByUrl('/auth/login')

                return false;
                
            }
             else {

               this.apiService.storeInfo(res);
                
            }
            
        })
        
            // this.currentUser = this.apiService.getLoggin();
            // console.log(this.currentUser);
         
        
      
         
       
        return true;
    }
}