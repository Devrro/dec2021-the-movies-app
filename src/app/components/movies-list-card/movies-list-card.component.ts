import {Component, Input, OnInit} from '@angular/core';
import {IFilms} from "../../models/films";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie: IFilms;

  constructor() { }

  ngOnInit(): void {
  }

}
