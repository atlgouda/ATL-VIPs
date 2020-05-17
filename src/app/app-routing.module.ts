import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VipsComponent } from './vips/vips.component';
import { AthleteComponent } from './athlete/athlete.component';


const routes: Routes = [
  { path: 'vips', component: VipsComponent},
  { path: 'athletes', component: AthleteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
