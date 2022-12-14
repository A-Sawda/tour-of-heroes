import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { JobType, JobTypeUi } from '../constants/jobTypeUi';
import { SexType, SexTypeUi } from '../constants/sexTypeUi';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero | undefined;
  public jobType = JobType;
  public jobTypeUi = JobTypeUi;
  public sexType = SexType;
  public sexTypeUi = SexTypeUi;

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
      .subscribe(hero => { this.hero = hero; });
  }

  goBack(): void {
    this.location.back();
  }

  save(job: string): void {
    if (this.hero) {
      this.hero.job = job.trim();
      this.hero.status = JobTypeUi[this.hero.job].status
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
