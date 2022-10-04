import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
import { CountsComponent } from './counts/counts.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { SolutionComponent } from './solution/solution.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutUsComponent,
    // ContactUsComponent,
    CountsComponent,
    FaqComponent,
    HomeComponent,
    PriceComponent,
    SolutionComponent,
    TestimonialsComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class DashboardModule { }

