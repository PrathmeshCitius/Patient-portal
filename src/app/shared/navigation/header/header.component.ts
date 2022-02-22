import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disableSelect = new FormControl();
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private gs: GlobalService
  )  
   { }
  showMe = true;


  showMeFun() { 
    setTimeout(() => {
      this.showMe = !this.showMe;
    }, 300);

    // this.state = (this.state === "show" ? "hide":"show")

  }
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
