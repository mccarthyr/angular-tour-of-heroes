import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { FormsModule }         from '@angular/forms';

import { AppComponent }        from './app.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService }         from './hero.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//   providers: [ HeroService, MessageService ],
/*
 The 'providers' array tells Angular to create a single, shared instance 
 if HeroService and inject into any class that asks for it.
*/