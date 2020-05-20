import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    VipsComponent,
    VipDetailComponent,
    AthleteComponent,
    MusicianComponent,
    ActorComponent,
    BusinessComponent,
    LeaderComponent,
    CategoryComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
