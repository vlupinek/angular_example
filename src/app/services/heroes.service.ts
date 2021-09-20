import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly API_URL = 'api/heroes';

  private readonly httpHeroOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.API_URL);
  }

  public getHero(heroId: number): Observable<Hero> {
    const url = `${this.API_URL}/${heroId}`;
    return this.http.get<Hero>(url);
  }

  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.API_URL, hero);
  }

  public deleteHero(heroId: number): Observable<any> {
    const url = `${this.API_URL}/${heroId}`;

    return this.http.delete<Hero>(url, this.httpHeroOptions);
  }

  public addHero(heroName: string): Observable<Hero> {
    return this.http.post<Hero>(this.API_URL, {name: heroName} as Hero, this.httpHeroOptions);
  }

}