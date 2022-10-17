import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './client/chat/chat.component';
import { CrmComponent } from './client/crm/crm.component';
import { AboutUsComponent } from './client/dashboard/about-us/about-us.component';
import { FaqComponent } from './client/dashboard/faq/faq.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { HomeComponent } from './client/dashboard/home/home.component';
import { SolutionComponent } from './client/dashboard/solution/solution.component';
import { EmailComponent } from './client/email/email.component';
import { InboundComponent } from './client/inbound/inbound.component';
import { IvrComponent } from './client/ivr/ivr.component';
import { OutboundComponent } from './client/outbound/outbound.component';
import { ReportComponent } from './client/report/report.component';
import { SocialMediaComponent } from './client/social-media/social-media.component';
import { VoiceSystemComponent } from './client/voice-system/voice-system.component';


const routes: Routes = [
  { path:'ivr', component:IvrComponent},

  { path:'home', component:HomeComponent},
  { path:'about', component:AboutUsComponent},
  { path:'contact', component:ContactUsComponent},
  { path:'service', component:SolutionComponent},
  { path:'faq', component:FaqComponent},
  { path:'', redirectTo:'home', pathMatch: 'full'},
  { path:'email', component:EmailComponent},
  { path: 'inbound', component:InboundComponent},
  { path: 'chat', component:ChatComponent},
  { path: 'socialmedia', component:SocialMediaComponent},
  { path: 'inbound', component:InboundComponent},
  { path: 'outbound', component:OutboundComponent},
  { path: 'report', component:ReportComponent},
  { path: 'crm', component:CrmComponent},
  { path: 'voiceSystem', component:VoiceSystemComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'}
    // {scrollPositionRestoration: 'enabled'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
