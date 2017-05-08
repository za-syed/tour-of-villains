import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { Customer } from "./customer";
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  powers:string[]=['Flying','Invisibility', 'Fire', 'Immortality','Super Strength'];
  selectedHero: Hero;
  model:Hero ={id: 0, name:""};
  customers: Customer[];

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        //.then(heroes => this.heroes = heroes);
        .then((heroes)=>{
          this.heroes = heroes
          this.model.id =this.getLastID();
        });
        //this.hero.id = this.getLastID();
      //   this.heroService
      //   .getCustomers()
      //   .then((customers)=>{
      //     this.customers=customers;
      //   });
      //  alert(JSON.stringify(this.customers));
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }
    add(): void {
    //name = name.trim();
    if (!this.model) { return; }
    this.heroService.create(this.model)
      .then(hero => {
        //this.heroes.push();
        this.getHeroes();
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/hero-detail', this.selectedHero.id]);
  }
   getLastID():number {
     let max:number = 0;
    this.heroes.forEach(function (member, index) {
            // console.log(member, index);
            if (member.id > max) {
                max = member.id;
                // console.log("Max now: " + max);
            }
        });        
    return max+=1;
    }
}
