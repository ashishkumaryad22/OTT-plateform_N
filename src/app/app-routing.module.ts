import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickVideoComponent } from './click-video/click-video.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { GuardService } from './services/guard.service';
import { UploadVideoComponent } from './upload-video/upload-video.component';


const routes: Routes = [
  {
    path:"",
    component:NavbarComponent  
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterViewComponent
  },
  {
    path:"login_view",
    component:LoginViewComponent
  },
  {
    path:"clickvideo",
    component:ClickVideoComponent
  },
  {
    path:"second_view",
    canActivate:[GuardService],
    component:SecondViewComponent
  },
  {
    path:"live",
    component:LiveStreamComponent
  },
  {
    path:"upload",
    component:UploadVideoComponent
  }
    
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
