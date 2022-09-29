import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ClientComponent } from './client/client.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
// import { CountsComponent } from './counts/counts.component';
// import { FaqComponent } from './faq/faq.component';
// import { HomeComponent } from './home/home.component';
// import { PriceComponent } from './price/price.component';
// import { ServiceComponent } from './service/service.component';
// import { SolutionComponent } from './solution/solution.component';
// import { TeamComponent } from './team/team.component';
// import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    DashboardComponent,
    // AboutUsComponent,
    // ClientComponent,
    // ContactUsComponent,
    // CountsComponent,
    // FaqComponent,
    // HomeComponent,
    // PriceComponent,
    // ServiceComponent,
    // SolutionComponent,
    // TeamComponent,
    // TestimonialsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
