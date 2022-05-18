import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit , OnDestroy{


  leftArrow = faLeftLong;
  rightArrow = faRightLong;

  @Input() category : string | undefined;
  @ViewChild('viewContainer', { read: ElementRef}) slideContainer: ElementRef | undefined;

  movies : Movie[] | undefined;
  subscription: Subscription | undefined;
  slide: number = 0;

  slideElement = 200;
  slideStep = 400;
  slideMaximum = 0;
  slideMarginWidth = 10;

  constructor(
    private _movieService: MoviesService,
    private _renderer: Renderer2
  ) { }

  slideMovies(value: number) {
    this.slide += this.slideStep * value;

    if(Math.abs(this.slide) >= this.slideMaximum) {
      this.slide = (this.slideMaximum * -1)
    }
    if (this.slide >= 0){
      this.slide = 0
    }
    if(this.slideContainer) {
      this._renderer.setStyle(this.slideContainer.nativeElement, 'transform', `translateX(${this.slide}px)`)
    }
  }

  ngOnInit(): void {
    if(this.category){
      this._movieService.GetMovies(this.category).subscribe(
        (movies) => {
          this.movies = movies;
          this.slideMaximum = (((this.slideElement + this.slideMarginWidth) * this.movies.length) - this.slideMarginWidth) - window.innerWidth;
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();

  }
}
