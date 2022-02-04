import { AdminComponent } from "./admin/admin/admin.component";
import { AppComponent } from "./app.component";
import { PatientComponent } from "./patient/patient/patient.component";
import { PhysicianComponent } from "./physician/physician/physician.component";
import { Routes, RouterModule, ROUTES } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { LandingComponent } from "./shared/navigation/landing/landing.component";
import { LogoutComponent } from "./auth/logout/logout.component";
// import { DashboardComponent } from "./patient/patient/dashboard/dashboard.component";
// import { SideNavbarComponent } from "./patient/patient/side-navbar/side-navbar.component";


const routes: Routes = [



  { path: "", redirectTo: 'auth/login', pathMatch: "full" },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then((m) => m.PatientModule)
  } ,
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },

 // { path: "admin", component: AdminComponent },

  { path: "physician", loadChildren: () => import('./physician/physician.module').then((m) => m.PhysicianModule) },

  { path: "auth/login", component: LoginComponent },

  { path: "auth/registration", component: RegistrationComponent },

  { path: "auth/logout", component: LogoutComponent },


];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
