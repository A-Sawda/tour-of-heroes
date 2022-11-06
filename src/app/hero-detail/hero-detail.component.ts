import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { JobTypeUi } from '../constants/jobTypeUi';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero | undefined;

  constructor(
    private route: ActivatedRoute, /**L’ActivatedRoute contient des informations sur la route vers cette instance de HeroDetailComponent. Ce composant s’intéresse aux paramètres de la route extraite de l’URL. Le paramètre « id » est l’identifiant du héros à afficher. */
    private heroService: HeroService, /**Le HeroService obtient les données du héro du serveur distant et ce composant l'utilise pour savoir quel héro afficher. */
    private location: Location /**L’emplacement est un service Angular pour interagir avec le navigateur. Ce service vous permet de revenir à la vue précédente. */
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {this.hero = hero; console.log('hero récupéré', hero);});
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.hero.fullName=this.hero.firstName + ' ' + this.hero.lastName;
      this.hero.status=JobTypeUi[this.hero.job].status
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
