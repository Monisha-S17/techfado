import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client/client.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';


const routes: Routes = [

  {path: '', component:DashboardComponent},
  

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
