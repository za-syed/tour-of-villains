import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Villain }        from './villain';
import { VillainService } from './villain.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: [ './villain-detail.component.css' ]
})
export class VillainDetailComponent implements OnInit {
  villain: Villain;

  constructor(
    private villainService: VillainService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.villainService.getVillain(+params['id']))
      .subscribe(villain => this.villain = villain);
  }

  save(): void {
    this.villainService.update(this.villain)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
