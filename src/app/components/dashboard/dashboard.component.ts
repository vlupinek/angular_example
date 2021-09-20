import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public heroes: Observable<Hero[]>;

  constructor(private heroesService: HeroesService, private router: Router) { 
    this.heroes = this.heroesService.getHeroes();
  }

  navigateOnHero(heroId: number) {
    this.router.navigate(['hero', heroId]);
  }

  ngOnInit(): void {
  }

}
