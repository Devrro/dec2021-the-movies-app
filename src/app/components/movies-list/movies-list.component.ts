import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {IFilms} from "../../models/films";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IFilms[];

  constructor(
    private movieService:MoviesService
  ) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(value => this.movies = value)
  }

}
