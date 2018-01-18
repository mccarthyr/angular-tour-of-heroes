import { Component, OnInit } from '@angular/core';
import { Hero }              from '../hero';
import { HeroService }       from '../hero.service';

// import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};

  //heroes = HEROES;
  heroes: Hero[];

  //selectedHero: Hero;

  constructor( private heroService: HeroService ) { }


  ngOnInit() {
    this.getHeroes();
  }

  /*
  onSelect( hero: Hero ): void {
    this.selectedHero = hero;
  }
  */

  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  
  This has been updated below when the HeroService getHeroes()
  method was changed to return an Observable<Hero[]> instead of 
  just a Hero[]
  */

  getHeroes(): void {
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes );
  }


  add( name: string ): void {

    name = name.trim();
    if ( !name ) { return; }
    this.heroService.addHero( { name } as Hero )
      .subscribe( hero => { 
        this.heroes.push(hero) 
      });
  }

  delete( hero: Hero ): void {

    this.heroes = this.heroes.filter( h => h !== hero );
    /*
     * There's nothing for the component to do with the Observable
     * returning by heroService.delete(). It MUST subscribe anyway.
     */
    this.heroService.deleteHero( hero ).subscribe();
  }

}

/*
 NOTE: this.heroService.deleteHero( hero ).subscribe()
 If you neglect subscribe(), the service will NOT send the delete request.
 As a rule, an Observable does nothing until something subscribes.
 */



