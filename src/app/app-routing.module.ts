import { AdminComponent } from "./admin/admin/admin.component";
import { AppComponent } from "./app.component";
import { PatientComponent } from "./patient/patient/patient.component";
import { PhysicianComponent } from "./physician/physician/physician.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { LogoutComponent} from "./auth/logout/logout.component";
// import { DashboardComponent } from "./patient/patient/dashboard/dashboard.component";
// import { SideNavbarComponent } from "./patient/patient/side-navbar/side-navbar.component";


const routes: Routes = [

    { path: "", component: AppComponent },
  
    { path: "patient", component: PatientComponent },
  
    { path: "admin", component: AdminComponent },
  
    { path: "physician", component: PhysicianComponent },

    { path: "auth/login", component: LoginComponent },

    { path: "auth/registration", component: RegistrationComponent },

    { path: "auth/logout", component: LogoutComponent },

    // Pateint Dashboard by Prathmesh on 02-02-22
    // { path: "dashboard", component: DashboardComponent },

    // { path: "side-navbar", component: SideNavbarComponent },
  
  ];
  
  
  
  @NgModule({
  
    imports: [RouterModule.forRoot(routes)],
  
    exports: [RouterModule]
  
  })
  
  export class AppRoutingModule { }