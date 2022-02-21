import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  

  constructor(public router: Router,private gs:GlobalService){}
  
  ngOnInit(): void {
      
  }

  logOut(){
    this.gs.deleteuserloggeddata("abc",1).subscribe((res)=>{


      if(res){
        console.log("record deleted");
        this.router.navigateByUrl('/auth/login');
      }
    });

   
  }
 
}
