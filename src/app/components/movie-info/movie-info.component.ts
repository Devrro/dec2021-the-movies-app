import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {IFilm} from "../../models/IFilm";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: IFilm;


  constructor(
    private ac: ActivatedRoute,
    private moviesService: MoviesService,
  ) {
  }

  ngOnInit(): void {
    this.ac.params.subscribe(({id}) => {
      this.moviesService.getMovieDetails(id).subscribe((movie) => {
        this.movie = movie
        // this.saveMovieToStorage(movie)
      })
    })
  }
  //
  // saveMovieToStorage(movie: IFilm): void {
  //   this.movieSetter.movieStorage.next([this.movie])
  // }
}
