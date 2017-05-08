import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { Customer } from "./customer";

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api
  private customersUrl = 'http://localhost:3000'; 

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
  getCustomers(): Promise<Customer[]> {
    return this.http.get(`${this.customersUrl}/getCustomers`)
               .toPromise()
               .then(
                 (response) => {
                  let cust:Customer[] =  response.json().data as Customer[];                   
                  return cust;
                },
                (error)=>{})
               .catch(this.handleError);
  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then((response)=>{
        console.log(response.json().data );
        return response.json().data as Hero;
      },(error)=>{
        console.log(error);
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // create(name: string): Promise<Hero> {
  //   return this.http
  //     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data as Hero)
  //     .catch(this.handleError);
  // }
   create(hero: Hero): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({id:hero.id, name:hero.name,power:hero.power}), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data as Hero)
      .then((res)=>{
       return res.json().data as Hero;
      },(err)=>{

      })
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
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

