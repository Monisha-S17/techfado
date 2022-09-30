import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './client/dashboard/about-us/about-us.component';
import { ContactUsComponent } from './client/dashboard/contact-us/contact-us.component';
import { FaqComponent } from './client/dashboard/faq/faq.component';
import { HomeComponent } from './client/dashboard/home/home.component';
import { PriceComponent } from './client/dashboard/price/price.component';
// import { ChatComponent } from './client/dashboard/solution/chat/chat.component';
import { SolutionComponent } from './client/dashboard/solution/solution.component';
import { IvrComponent } from './client/ivr/ivr.component';
import { VoiceSystemModule } from './client/voice-system/voice-system.module'
const routes: Routes = [
 //{ path:'dashbord/home', loadChildren: ()=> import('./client/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path:'ivr', component:IvrComponent},
  // { path:'chat', component:ChatComponent},

  { path:'dashbord/home', component:HomeComponent},
  { path:'dashbord/about', component:AboutUsComponent},
  { path:'dashbord/contact', component:ContactUsComponent},
  { path:'dashbord/service', component:SolutionComponent},
  { path:'dashbord/faq', component:FaqComponent},
  { path:'dashbord/price', component:PriceComponent },
  { path:'', redirectTo:'dashbord/home', pathMatch: 'full'},
  { path:'dashbord/', redirectTo:'dashbord/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true}
    // {scrollPositionRestoration: 'enabled'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
