import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() patientImage;
  disableSelect = new FormControl();
  welcome:any=[];
  length:number;
  username :string;
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
    this.gs.setLoggedInUser().subscribe((res)=>{
      console.log("res",res);
 
    this.welcome=res;
    //  console.log("sindu",this.welcome.length)
//.log("1111111", this.welcome.image)
this.length = this.welcome.length;
 // this.aman = res[this.welcome.length].firstName
  //console.log("Length",this.length);
  //console.log("Ovi", this.welcome[this.length-1].firstName);
  console.log("adit",this.welcome[this.length-1].image)
  this.username = this.welcome[this.length-1].firstName;

    })
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
