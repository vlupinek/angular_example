import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Jan Novák' },
      { id: 2, name: 'František Omáčka' },
      { id: 3, name: 'Božena Němcová' },
      { id: 4, name: 'Pepa Zdepa' },
      { id: 5, name: 'Tomáš Marný' },
      { id: 6, name: 'František Křižík' },
      { id: 7, name: 'Jaroslav Heyrovský' },
      { id: 8, name: 'Jaroslav Seifert' },
      { id: 9, name: 'Jan Werich' },
      { id: 10, name: 'Ondřej Neff' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
