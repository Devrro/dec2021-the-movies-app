import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {IFilm} from "../../models/IFilm";
import{faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  faStar = faStar;

  movie: IFilm;
    rate: number;

  constructor(
    private ac: ActivatedRoute,
    private moviesService: MoviesService,
  ) {
  }

  ngOnInit(): void {
    this.ac.params.subscribe(({id}) => {
      this.moviesService.getMovieDetails(id).subscribe((movie) => {
        this.rate = movie.vote_average
        this.movie = movie
      })
    })
  }

}
