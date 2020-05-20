import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VipsComponent } from './vips/vips.component';
import { AthleteComponent } from './athlete/athlete.component';
import { ActorComponent } from './actor/actor.component';
import { BusinessComponent } from './business/business.component';
import { LeaderComponent } from './leader/leader.component';
import { MusicianComponent } from './musician/musician.component';
import { VipDetailComponent } from './vip-detail/vip-detail.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/vips', pathMatch: 'full' },
  // { path: 'athletes', component: AthleteComponent },
  // { path: 'actors', component: ActorComponent },  
  // { path: 'business', component: BusinessComponent },  
  // { path: 'music', component: MusicianComponent },  
  // { path: 'leader', component: LeaderComponent },  
  { path: 'detail/:id', component: VipDetailComponent},
  { path: 'vips', component: VipsComponent},
  // { path: ':id', component: CategoryComponent}
  { path: 'ath/:id', component: CategoryComponent},
  { path: 'ath/:id', component: CategoryComponent},
  { path: 'act/:id', component: CategoryComponent},
  { path: 'bus/:id', component: CategoryComponent},
  { path: 'lea/:id', component: CategoryComponent},
  { path: 'mus/:id', component: CategoryComponent}
  // { path: '**', component: CategoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
