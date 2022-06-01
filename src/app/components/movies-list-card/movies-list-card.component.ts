import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../../models/IFilm";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie: IFilm;


  constructor(
    private ac: ActivatedRoute,

    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  getDetails(filmId: string): void {
      this.router.navigate([`${filmId}`], {relativeTo: this.ac,queryParamsHandling:'preserve'}).then(() => {
    })
  }
}
