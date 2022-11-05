import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { JobType, JobTypeUi } from './constants/jobTypeUi';
import { SexType, SexTypeUi } from './constants/sexTypeUi';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, sex:SexTypeUi[SexType.MASCULIN].label, lastName:'Idriss', firstName: 'Noor', job:JobTypeUi[JobType.COACH].label },
      { id: 10, sex:SexTypeUi[SexType.FEMININ].label, lastName:'Abdoul', firstName: 'Sabira', job:JobTypeUi[JobType.COMMUNICATION].label  },
      { id: 10, sex:SexTypeUi[SexType.FEMININ].label, lastName:'Seydou', firstName: 'Amina', job:JobTypeUi[JobType.HOTESSE].label  },
      { id: 10, sex:SexTypeUi[SexType.FEMININ].label, lastName:'Djibril', firstName: 'Jamila', job:JobTypeUi[JobType.MENAGE].label  },
      { id: 10, sex:SexTypeUi[SexType.MASCULIN].label, lastName:'Nasser', firstName: 'Ibrahim', job:JobTypeUi[JobType.COACH].label },
      { id: 10, sex:SexTypeUi[SexType.MASCULIN].label, lastName:'Issa', firstName: 'Youssouf', job:JobTypeUi[JobType.COMMUNICATION].label  },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}