import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Villain } from './villain';

@Injectable()
export class VillainService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private villainsUrl = 'api/villains';  // URL to web api

  constructor(private http: Http) { }

  getVillains(): Promise<Villain[]> {
    return this.http.get(this.villainsUrl)
               .toPromise()
               .then(response => response.json().data as Villain[])
               .catch(this.handleError);
  }


  getVillain(id: number): Promise<Villain> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Villain)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.villainsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Villain> {
    return this.http
      .post(this.villainsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Villain)
      .catch(this.handleError);
  }

  update(hero: Villain): Promise<Villain> {
    const url = `${this.villainsUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

