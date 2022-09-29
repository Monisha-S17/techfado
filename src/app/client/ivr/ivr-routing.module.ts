import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvrComponent } from './ivr.component';

const routes: Routes = [
  {path:'', component:IvrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvrRoutingModule { }
