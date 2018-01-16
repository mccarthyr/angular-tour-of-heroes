import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],	
  exports: [ RouterModule ]
})

export class AppRoutingModule {}



/*
 You generall don't declare components in a routing module so the
 originally generated CommonModule that was imported and the
 @NgModule.declarations array have been removed.

 Exporting RouterModule makes router directives available for
 use in the AppModule components that will need them.
 
 A typical Angular Route has two properties:
 - path: a string that matches the URL in the browser
 - component: the component that the router should create

 */
