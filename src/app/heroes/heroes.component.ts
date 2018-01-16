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

  selectedHero: Hero;

  constructor( private heroService: HeroService ) { }


  ngOnInit() {
    this.getHeroes();
  }

  onSelect( hero: Hero ): void {
    this.selectedHero = hero;
  }

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




}


