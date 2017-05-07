import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Villain }           from './villain';

@Injectable()
export class VillainSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Villain[]> {
    return this.http
               .get(`app/villains/?name=${term}`)
               .map(response => response.json().data as Villain[]);
  }
}
