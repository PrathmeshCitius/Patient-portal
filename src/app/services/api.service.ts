import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {

 

  userInfo: any
  
  
   constructor(private http:HttpClient ) { }


  setLoggedInUser(){

    return this.http.get("http://localhost:3000/loggedin");
  }


 
  storeInfo(data){
      this.userInfo = data;
      console.log(this.userInfo);
  }

  getUserInfo() {
    
    return this.userInfo;
  }

   deleteuserloggeddata(data,id) {
    return this.http.delete(`http://localhost:3000/loggedin/${id}`, data);
  }

  // setLoggin(data) {

  
  //   console.log(data.length);
  //   if (data.length != 0) {
  //     this.userInfo = true;
  //     console.log(this.userInfo);
  //   } else this.userInfo = false
  //   console.log(this.userInfo);
  // }



}
