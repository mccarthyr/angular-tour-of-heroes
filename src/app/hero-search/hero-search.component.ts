import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { of }                from 'rxjs/observable/of';

import {
         debounceTime, 
         distinctUntilChanged, 
         switchMap
}                            from 'rxjs/operators';

import { Hero }              from '../hero';
import { HeroService }       from '../hero.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})


export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor( private heroService: HeroService ) { }

  
  // Push a search term into the observable stream.
  search( term: string ): void {
  	this.searchTerms.next( term );
  }


  ngOnInit(): void {

  	this.heroes$ = this.searchTerms.pipe(

  		// wait 300ms after each keystroke before considering the term
  		debounceTime(300),

  		// ignore new term if same as previous term
  		distinctUntilChanged(),

  		// switch to new search observable each time the term changes
  		switchMap( ( term: string ) => this.heroService.searchHeroes( term ) )
  		);
  }

}

/*
 A 'Subject' is BOTH a source of Observable values and an Observable itself. 
 You can subscribe to a Subject as you would any observable.

 You can also push value into that Observable by calling its next(value) method
 as is done in the search() method above.

 The search() method is called via an event binding from the input in the html
 template.
 */