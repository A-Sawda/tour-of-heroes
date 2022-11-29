import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, /**Le chemin par défaut */
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'new-employee', component: NewHeroComponent },
  { path: 'search-employee', component: HeroSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
