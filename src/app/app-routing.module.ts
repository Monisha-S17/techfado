import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren: ()=> import('./client/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path:'ivr', loadChildren: ()=> import('./client/ivr/ivr.module').then(m => m.IvrModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
