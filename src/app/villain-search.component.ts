import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { VillainSearchService } from './villain-search.service';
import { Villain } from './villain';

@Component({
  selector: 'villain-search',
  templateUrl: './villain-search.component.html',
  styleUrls: [ './villain-search.component.css' ],
  providers: [VillainSearchService]
})
export class VillainSearchComponent implements OnInit {
  villains: Observable<Villain[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private villainSearchService: VillainSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.villains = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.villainSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Villain[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Villain[]>([]);
      });
  }

  gotoDetail(villain: Villain): void {
    let link = ['/villain-detail', villain.id];
    this.router.navigate(link);
  }
}
