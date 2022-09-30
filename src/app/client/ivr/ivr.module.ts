import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvrComponent } from './ivr.component';

import {MatCardModule} from '@angular/material/card';

// import { IvrRoutingModule } from './ivr-routing.module';



@NgModule({
  declarations: [
    IvrComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
   
    // IvrRoutingModule
  ]
})
export class IvrModule { }
