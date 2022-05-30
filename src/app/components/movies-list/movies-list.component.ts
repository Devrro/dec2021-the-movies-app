import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {IFilms} from "../../models/films";
import {IResponseObj} from "../../models/IResponseObj";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  pageResponse: IResponseObj;
  movies: IFilms[];
  page: number = 1;
  totalNumberPage:number;

  constructor(
    private movieService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(value => this.movies = value.results)
  }

}
