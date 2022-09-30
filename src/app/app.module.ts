import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoiceSystemModule } from './client/voice-system/voice-system.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChatComponent } from './client/chat/chat.component';
import { EmailComponent } from './client/email/email.component';
import { SocialMediaComponent } from './client/social-media/social-media.component';
import { InboundComponent } from './client/inbound/inbound.component';
import { OutboundComponent } from './client/outbound/outbound.component';
import { ReportComponent } from './client/report/report.component';
import { CrmComponent } from './client/crm/crm.component';
import { IvrComponent } from './client/ivr/ivr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ChatComponent,
    EmailComponent,
    SocialMediaComponent,
    InboundComponent,
    OutboundComponent,
    ReportComponent,
    CrmComponent,
    IvrComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    VoiceSystemModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
