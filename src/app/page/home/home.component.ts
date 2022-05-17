import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  categories: Observable<string[]>;

  constructor(
    private _moviesService :MoviesService
  ) {
    this.categories = this._moviesService.GetCategories();
  }

  ngOnInit(): void {

  }

}
