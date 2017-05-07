import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { Villain } from "./villain";
import { HeroService } from './hero.service';
import { VillainService } from "./villain.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  villains: Villain[]=[];

  constructor(private heroService: HeroService, private villainService:VillainService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
      this.villainService.getVillains()
      .then(villains =>this.villains =villains.slice(1,5));
  }
}
