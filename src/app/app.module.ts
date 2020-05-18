import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VipsComponent } from './vips/vips.component';
import { FormsModule } from '@angular/forms';
import { VipDetailComponent } from './vip-detail/vip-detail.component';
import { AthleteComponent } from './athlete/athlete.component';
import { MusicianComponent } from './musician/musician.component';
import { ActorComponent } from './actor/actor.component';
import { BusinessComponent } from './business/business.component';
import { LeaderComponent } from './leader/leader.component';

@NgModule({
  declarations: [
    AppComponent,
    VipsComponent,
    VipDetailComponent,
    AthleteComponent,
    MusicianComponent,
    ActorComponent,
    BusinessComponent,
    LeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
