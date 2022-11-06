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
      { 
        id: 10, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Idriss', 
        firstName: 'Noor', 
        fullName:'Noor Idriss',
        job:JobTypeUi[JobType.COACH].label , 
        status: JobTypeUi[JobType.COACH].status,
      },
      { 
        id: 11, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Abdoul', 
        firstName: 'Sabira', 
        fullName:'Sabira Abdoul',
        job:JobTypeUi[JobType.COMMUNICATION].label , 
        status: JobTypeUi[JobType.COMMUNICATION].status, 
      },
      { 
        id: 12, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Seydou', 
        firstName: 'Amina', 
        fullName:'Amina Seydou', 
        job:JobTypeUi[JobType.HOTESSE].label  , 
        status: JobTypeUi[JobType.HOTESSE].status,
      },
      { 
        id: 13, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Dibril', 
        firstName: 'Jamila', 
        fullName:'Jamila Dibril', 
        job:JobTypeUi[JobType.MENAGE].label,
        status: JobTypeUi[JobType.MENAGE].status,
      },
      { 
        id: 14, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Nasser', 
        firstName: 'Ibrahim', 
        fullName:'Ibrahim Nasser', 
        job:JobTypeUi[JobType.COACH].label, 
        status: JobTypeUi[JobType.COACH].status,
      },
      { id: 15, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Issa', 
        firstName: 'Youssouf', 
        fullName:'Youssouf Issa', 
        job:JobTypeUi[JobType.COMMUNICATION].label , 
        status: JobTypeUi[JobType.COMMUNICATION].status, 
      },
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