import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VipsComponent } from './vips/vips.component';
import { VipDetailComponent } from './vip-detail/vip-detail.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/vips', pathMatch: 'full' },
  { path: 'detail/:id', component: VipDetailComponent},
  { path: 'vips', component: VipsComponent},
  { path: 'ath/:id', component: CategoryComponent},
  { path: 'ath/:id', component: CategoryComponent},
  { path: 'act/:id', component: CategoryComponent},
  { path: 'bus/:id', component: CategoryComponent},
  { path: 'lea/:id', component: CategoryComponent},
  { path: 'mus/:id', component: CategoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
