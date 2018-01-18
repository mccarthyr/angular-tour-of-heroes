import { Injectable }              from '@angular/core';
import { Hero }                    from './hero';
import { HEROES }                  from './mock-heroes';
import { Observable }              from 'rxjs/Observable';
import { of }                      from 'rxjs/observable/of';
import { MessageService }          from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap }    from 'rxjs/operators';

/*
 The @Injectable decorator tells Angular that this service might itself
 have injected dependencies.
 You must provide the HeroService in the dependency injection system
 before Angular can inject it into the HeroesComponent. It is done in
 the AppModule for this project, it could be provided in the other components.
*/
@Injectable()
export class HeroService {

  /* In the simulated server in-memory-data.service file 'heroes' is the name 
     of the array that is returned. To access anything in the simulated server 
     use api/<name_of_return_value> 
   */
  private heroesUrl = 'api/heroes';


  constructor( 
    private http: HttpClient,
    private messageService: MessageService ) { }

  /*
  getHeroes(): Hero[] {
  	return HEROES;
  }
  */

  /*
  getHeroes(): Observable<Hero[]> {
  	// Sending a message via the MessageService when a hero is fetched.
  	this.messageService.add( 'HeroService: fetched heroes' );
  	return of(HEROES);
  }
  */

  /**
   * GET heroes from the server. Tap looks at Observable values, does something 
   * with them and passes them along.
   */
  getHeroes() : Observable<Hero[]> {

    return this.http.get<Hero[]>( this.heroesUrl ).pipe(

      tap( heroes => this.log( `fetched heroes` ) ),
      catchError( this.handleError( 'getHeroes', [] ) 
    ) );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result    - optional value to return as the observable result
   */
  private handleError<T>( operation = 'operation', result?: T ) {

    return ( error: any ): Observable<T> => {

      console.log( error );
      this.log( `${operation} failed: ${error.message}` );
      
      // Let the app keep running by returning an empty result
      return of( result as T );
    }
  }

  /*
  getHero( id: number ): Observable<Hero> {    
  	// Note: Use of backticks below that define a Javascript Template Literal
  	//       for embedding the id.
  
    this.messageService.add( `HeroService: fetched hero id=${id}` );
    return of( HEROES.find( hero => hero.id === id ) );
  }
  */

  /**
   * GET hero by ID. Will 404 if ID not found.
   */
  getHero( id: number ): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>( url ).pipe(
      tap( _ => this.log( `fetched hero id=${id}` ) ),
      catchError( this.handleError<Hero>( `getHero id=${id}` ) )
      );

  }



  /**
   * Log a HeroService message with the MessageService  
   */
  private log( message: string ) {
    this.messageService.add( 'HeroService: ' + message );
  }


}



/*
   of(HEROES) returns an Observable<Hero[]> that emits a single value, the
   array of mock heroes.
 */

/*
 To catch errors, you "pipe" the Observable result from http.get() through
 an RxJS catchError() operator.
 */

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