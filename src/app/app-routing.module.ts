import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { VillainsComponent } from "./villains.component";
import { VillainDetailComponent } from "./villain-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
   { path: 'hero-detail/:id', component: HeroDetailComponent },
    { path: 'villain-detail/:id', component: VillainDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'villains', component: VillainsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
