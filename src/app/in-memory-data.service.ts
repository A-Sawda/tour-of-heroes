import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { JobType, JobTypeUi } from './constants/jobTypeUi';
import { SexType } from './constants/sexTypeUi';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 9,
        sex: SexType.FEMININ,
        lastName: 'Abdoulaye',
        firstName: 'Sawda',
        fullName: 'Sawda Abdoulaye',
        job: JobType.DG,
        status: JobTypeUi[JobType.DG].status,
      },
      {
        id: 10,
        sex: SexType.MASCULIN,
        lastName: 'Idriss',
        firstName: 'Noor',
        fullName: 'Noor Idriss',
        job: JobType.GARDIEN,
        status: JobTypeUi[JobType.GARDIEN].status,
      },
      {
        id: 11,
        sex: SexType.FEMININ,
        lastName: 'Abdoul',
        firstName: 'Samira',
        fullName: 'Samira Abdoul',
        job: JobType.COACH,
        status: JobTypeUi[JobType.COACH].status,
      },
      {
        id: 12,
        sex: SexType.FEMININ,
        lastName: 'Moussa',
        firstName: 'Amina',
        fullName: 'Amina Moussa',
        job: JobType.HOTESSE,
        status: JobTypeUi[JobType.HOTESSE].status,
      },
      {
        id: 13,
        sex: SexType.FEMININ,
        lastName: 'Ahmed',
        firstName: 'Yousra',
        fullName: 'Yousra Ahmed',
        job: JobType.MENAGE,
        status: JobTypeUi[JobType.MENAGE].status,
      },
      {
        id: 14,
        sex: SexType.MASCULIN,
        lastName: 'Diallo',
        firstName: 'Ibrahim',
        fullName: 'Ibrahim Diallo',
        job: JobType.COMPTABLE,
        status: JobTypeUi[JobType.COMPTABLE].status,
      },
      {
        id: 15,
        sex: SexType.MASCULIN,
        lastName: 'Imran',
        firstName: 'Youssouf',
        fullName: 'Youssouf Imran',
        job: JobType.COMMUNICATION,
        status: JobTypeUi[JobType.COMMUNICATION].status,
      },
      {
        id: 16,
        sex: SexType.FEMININ,
        lastName: 'Coulibaly',
        firstName: 'Nadia',
        fullName: 'Nadia Coulibaly',
        job: JobType.ASSISTANTDEDIRECTION,
        status: JobTypeUi[JobType.ASSISTANTDEDIRECTION].status,
      },
      {
        id: 17,
        sex: SexType.MASCULIN,
        lastName: 'Nouhou',
        firstName: 'Ali',
        fullName: 'Ali Nouhou',
        job: JobType.COACH,
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