import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobType, JobTypeUi } from '../constants/jobTypeUi';
import { SexType, SexTypeUi } from '../constants/sexTypeUi';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  heroes: Hero[] = [];
  public jobType = JobType;
  public jobTypeUi = JobTypeUi;
  public sexType = SexType;
  public sexTypeUi = SexTypeUi;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(sex: string, firstName: string, lastName: string, job: string): void {
    if (!sex || !firstName || !lastName || !job) {
      this.heroService.addHeroError();
      return;
    }
    sex = sex.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    const fullName = firstName + ' ' + lastName;
    job = job.trim();
    const status = JobTypeUi[job].status;
    this.heroService.addHero({ sex, firstName, lastName, fullName, job, status } as Hero)
      .subscribe(hero => {
        console.log('hero ajouté', hero)
        this.heroes.push(hero); /**Mettre les données à jour dans le composant */
      });
  }

}
