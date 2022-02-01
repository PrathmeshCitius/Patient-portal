import { AdminComponent } from "./admin/admin/admin.component";
import { AppComponent } from "./app.component";
import { PatientComponent } from "./patient/patient/patient.component";
import { PhysicianComponent } from "./physician/physician/physician.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { LogoutComponent} from "./auth/logout/logout.component";

const routes: Routes = [

    { path: "", component: AppComponent },
  
    { path: "patient", component: PatientComponent },
  
    { path: "admin", component: AdminComponent },
  
    { path: "physician", component: PhysicianComponent },

    { path: "auth/login", component: LoginComponent },

    { path: "auth/registration", component: RegistrationComponent },

    { path: "auth/logout", component: LogoutComponent },
  
  ];
  
  
  
  @NgModule({
  
    imports: [RouterModule.forRoot(routes)],
  
    exports: [RouterModule]
  
  })
  
  export class AppRoutingModule { }