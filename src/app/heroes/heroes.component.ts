import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(sex: string,firstName: string,lastName: string,job: string): void {
    sex = sex.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    job = job.trim();
    if (!sex || !firstName || !lastName || !job) { return; }
    this.heroService.addHero({ sex, firstName, lastName, job } as unknown as Hero)
      .subscribe(hero => {
        console.log('hero ajouté', hero)
        this.heroes.push(hero); /**Mettre les données à jour dans le composant */
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero); /**Mettre les données à jour dans le composant en supposant que tout se passera bein coté serveur */
    this.heroService.deleteHero(hero.id).subscribe(); /**Si vous négligez de subscribe(), le service ne peut pas envoyer la demande de suppression au serveur. En règle générale, un Observable ne fait rien jusqu’à ce que quelque chose s’abonne. */
  }

}
