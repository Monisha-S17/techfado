import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvrRoutingModule } from './ivr-routing.module';
import { IvrComponent } from './ivr.component';


@NgModule({
  declarations: [
    IvrComponent
  ],
  imports: [
    CommonModule,
    IvrRoutingModule
  ]
})
export class IvrModule { }
