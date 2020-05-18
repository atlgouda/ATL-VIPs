import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VipsComponent } from './vips/vips.component';
import { AthleteComponent } from './athlete/athlete.component';
import { VipDetailComponent } from './vip-detail/vip-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/vips', pathMatch: 'full' },
  { path: 'athletes', component: AthleteComponent },
  { path: 'detail/:id', component: VipDetailComponent},
  { path: 'vips', component: VipsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
