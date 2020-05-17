import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VipsComponent } from './vips/vips.component';
import { FormsModule } from '@angular/forms';
import { VipDetailComponent } from './vip-detail/vip-detail.component';
import { AthleteComponent } from './athlete/athlete.component';

@NgModule({
  declarations: [
    AppComponent,
    VipsComponent,
    VipDetailComponent,
    AthleteComponent
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
