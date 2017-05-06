import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Villain }                from './villain';
import { VillainService }         from './villain.service';

@Component({
  selector: 'my-villains',
  templateUrl: './villains.component.html',
  styleUrls: [ './villains.component.css' ]
})
export class VillainsComponent implements OnInit {
  villains: Villain[];
  selectedVillain: Villain;

  constructor(
    private villainService: VillainService,
    private router: Router) { }

  getVillains(): void {
    this.villainService
        .getVillains()
        .then(villains => this.villains = villains);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.villainService.create(name)
      .then(villain => {
        this.villains.push(villain);
        this.selectedVillain = null;
      });
  }

  delete(villain: Villain): void {
    this.villainService
        .delete(villain.id)
        .then(() => {
          this.villains = this.villains.filter(h => h !== villain);
          if (this.selectedVillain === villain) { this.selectedVillain = null; }
        });
  }

  ngOnInit(): void {
    this.getVillains();
  }

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedVillain.id]);
  }
}
