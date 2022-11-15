import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FAuS';
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.heroService.searchHeroes(term)
      .subscribe(heroes => { this.heroes = heroes })
  }

  getId(hero: Hero) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id', id, 'hero', hero.id);
  }

  ngOnInit(): void {
  }
}
