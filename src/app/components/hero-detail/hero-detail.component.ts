import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  public hero?: Hero;

  // private heroSubscription: Subscription; 

  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private location: Location) { }
  
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    const heroSubscription = this.heroesService.getHero(id).subscribe(hero => {
      this.hero = hero;
      heroSubscription.unsubscribe();
    });
  }

  onSaveClick() {
    if (this.hero) {
      this.heroesService.updateHero(this.hero).subscribe(() => this.location.back());
    }
  }

  onBackClick() {
    this.location.back();
  }
}
