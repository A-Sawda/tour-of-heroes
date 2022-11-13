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
        id: 9, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Abdoulaye', 
        firstName: 'Sawda', 
        fullName:'Sawda Abdoulaye',
        job:JobTypeUi[JobType.DG].label , 
        status: JobTypeUi[JobType.DG].status,
      },
      { 
        id: 10, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Idriss',
        firstName: 'Noor', 
        fullName:'Noor Idriss',
        job:JobTypeUi[JobType.GARDIEN].label , 
        status: JobTypeUi[JobType.GARDIEN].status,
      },
      { 
        id: 11, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Abdoul', 
        firstName: 'Samira', 
        fullName:'Samira Abdoul',
        job:JobTypeUi[JobType.COACH].label , 
        status: JobTypeUi[JobType.COACH].status, 
      },
      { 
        id: 12, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Moussa', 
        firstName: 'Amina', 
        fullName:'Amina Moussa', 
        job:JobTypeUi[JobType.HOTESSE].label  , 
        status: JobTypeUi[JobType.HOTESSE].status,
      },
      { 
        id: 13, 
        sex:SexTypeUi[SexType.FEMININ].label, 
        lastName:'Ahmed', 
        firstName: 'Yousra', 
        fullName:'Yousra Ahmed', 
        job:JobTypeUi[JobType.MENAGE].label,
        status: JobTypeUi[JobType.MENAGE].status,
      },
      { 
        id: 14, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Diallo', 
        firstName: 'Ibrahim', 
        fullName:'Ibrahim Diallo', 
        job:JobTypeUi[JobType.COMPTABLE].label, 
        status: JobTypeUi[JobType.COMPTABLE].status,
      },
      { id: 15, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Imran', 
        firstName: 'Youssouf', 
        fullName:'Youssouf Imran', 
        job:JobTypeUi[JobType.COMMUNICATION].label , 
        status: JobTypeUi[JobType.COMMUNICATION].status, 
      },
      { 
        id: 16, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Coulibaly', 
        firstName: 'Nadia', 
        fullName:'Nadia Coulibaly',
        job:JobTypeUi[JobType.ASSISTANTDEDIRECTION].label , 
        status: JobTypeUi[JobType.ASSISTANTDEDIRECTION].status,
      },
      { 
        id: 17, 
        sex:SexTypeUi[SexType.MASCULIN].label, 
        lastName:'Nouhou', 
        firstName: 'Ali', 
        fullName:'Ali Nouhou',
        job:JobTypeUi[JobType.COACH].label , 
        status: JobTypeUi[JobType.COACH].status,
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