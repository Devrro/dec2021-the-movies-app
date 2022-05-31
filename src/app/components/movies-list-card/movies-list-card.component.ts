import {Component, Input, OnInit} from '@angular/core';
import {IFilms} from "../../models/films";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie: IFilms;


  constructor(
    private ac: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  getDetails(filmId:string):unknown{
    this.router.navigate([`${filmId}`], {relativeTo:this.ac}).then(()=>{})
    return undefined
  }
}
