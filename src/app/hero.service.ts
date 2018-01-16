import { Injectable } from '@angular/core';
import { Hero }       from './hero';
import { HEROES }     from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';


/*
 The @Injectable decorator tells Angular that this service might itself
 have injected dependencies.
 You must provide the HeroService in the dependency injection system
 before Angular can inject it into the HeroesComponent. It is done in
 the AppModule for this project, it could be provided in the other components.
*/


@Injectable()
export class HeroService {

  constructor() { }

  /*
  getHeroes(): Hero[] {
  	return HEROES;
  }
  */

  getHeroes(): Observable<Hero[]> {
  	return of(HEROES);
  }

  /*
   of(HEROES) returns an Observable<Hero[]> that emits a single value, the
   array of mock heroes.
   */


}


/*
 HeroService.getHeroes() MUST have an asynchronous signature of some kind, currently it is synchronous.

 It can take a callback. It could return a Promise. It could return an Observable.

 Both Promises & Observables provide us with abstractions that help us deal with the asynchronous nature of apps.

 Observables -
  are cancellable.
  works with multiple values over time
  supports map, filter, reduce and similar operators
  use Reactive Extensions (RxJS)
  an array whose items arrive asynchonously over time

 Promises -
  returns a single value
  not cancellable
  more reable code with try/catch & async/await

*/