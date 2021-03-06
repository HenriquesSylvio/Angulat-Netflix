import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
