import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes?: Observable<Hero[]>;

  public displayedColumns: string[] = ['id', 'name'];

  public selectedHero: Hero | undefined;

  public newHeroName: string | undefined;

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  public onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }

  public onDeleteHero(event: Event, hero: Hero) {
    event.stopPropagation();
    event.preventDefault();

    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    }

    const deleteSub: Subscription = this.heroesService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroesService.getHeroes();
      deleteSub.unsubscribe();
    });
  }

  public onViewDetailsClick() {
    this.router.navigate(['hero', this.selectedHero?.id]);
  }

  public onAddHeroClick() {
    if (this.newHeroName) {
      const addSub: Subscription = this.heroesService.addHero(this.newHeroName).subscribe(() => {
        this.newHeroName = undefined;
        this.heroes = this.heroesService.getHeroes();
        addSub.unsubscribe();
      });
    }
  }

}
