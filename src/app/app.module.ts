import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './page/home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './mock/InMemoryDataService';
import { PageComponent } from './page/page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './page/search/search.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    //SearchComponent
    //,
    //PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //environment.production === false ?
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay : 100 }):
    //[]
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay : 100 }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
