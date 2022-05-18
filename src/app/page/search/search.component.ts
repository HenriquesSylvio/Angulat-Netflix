import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = "";

  constructor(
    private _moviesService: MoviesService
  ) {
   }

  ngOnInit(): void {
    this._moviesService.SearchMovies(this.searchTerm);
  }
  searchForMovies(){

  }

}
