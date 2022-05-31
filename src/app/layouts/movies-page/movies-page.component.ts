import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  host: {class:'moviesPage_container'},
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
