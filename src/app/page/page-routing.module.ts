import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path :'home',
    component : PageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
