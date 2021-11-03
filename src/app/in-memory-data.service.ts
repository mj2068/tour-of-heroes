import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 100, name: '24' },
      { id: 101, name: 'X2' },
      { id: 102, name: 'Max' },
      { id: 103, name: 'Jiu' },
      { id: 104, name: 'Jovia' },
      { id: 105, name: 'The Wave' },
      { id: 106, name: 'Berry' },
      { id: 107, name: 'Pex' },
      { id: 108, name: 'Lon' },
      { id: 109, name: 'Signal' },
      { id: 110, name: 'Dr. Lean' },
      { id: 111, name: 'ChoCho' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 100;
  }
}
