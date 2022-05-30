import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IFilms} from "../models/films";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(
    private httpClient: HttpClient
  ) { }
  getPopularMovies():Observable<IFilms[]>{
    return this.httpClient.get<IFilms[]>(`${urls.popMovies}`)
  }
}
