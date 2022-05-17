import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SlideComponent } from './home/slide/slide.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageComponent } from './page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    SearchBarComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule,
    FontAwesomeModule
  ]
})
export class PageModule { }
