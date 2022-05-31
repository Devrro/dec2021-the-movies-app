import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IResponseObj} from "../models/IResponseObj";
import {IFilm} from "../models/IFilm";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getPopularMovies(page:string = '1'):Observable<IResponseObj>{
    return this.httpClient.get<IResponseObj>(`${urls.popMovies}`, {params:{page:page}})
  }
  getMovieDetails(id:string):Observable<IFilm>{
    return this.httpClient.get<IFilm>(`${urls.movieID}${id}`)
  }
}
