import { BrowserModule }                   from '@angular/platform-browser';
import { NgModule }                        from '@angular/core';
import { FormsModule }                     from '@angular/forms';
import { HttpClientModule }                from '@angular/common/http';
import { HttpClientInMemoryWebApiModule }  from 'angular-in-memory-web-api';

// The InMemoryDataService will be removed when a real web service is in place
import { InMemoryDataService }             from './in-memory-data.service';

import { AppComponent }                    from './app.component';
import { HeroesComponent }                 from './heroes/heroes.component';
import { HeroDetailComponent }             from './hero-detail/hero-detail.component';
import { HeroService }                     from './hero.service';
import { MessagesComponent }               from './messages/messages.component';
import { MessageService }                  from './message.service';
import { AppRoutingModule }                from './/app-routing.module';
import { DashboardComponent }              from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientModuleInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [ HeroService, MessageService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
 The 'providers' array tells Angular to create a single, shared instance 
 of the HeroService and inject into any class that asks for it.

 The HttpClientInMemoryWebApiModule.forRoot( ... ) configuration takes an
 InMemoryDataService class that primes the in-memory database.
 The InMemoryDataService class is our simulated server database class.
*/
