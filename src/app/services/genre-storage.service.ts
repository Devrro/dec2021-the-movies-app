import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IGenres,IGenresOBJ} from "../models/IGenres";
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreStorageService {

  genresIsSet = new BehaviorSubject<boolean>(false)
  genreListStorage =  new BehaviorSubject<IGenres[]>([])
  storageIds = new BehaviorSubject<IGenres[]>([])

  constructor(
    private httpClient: HttpClient,
  ) { }
  getGenres():Observable<IGenresOBJ>{
    return this.httpClient.get<IGenresOBJ>(`${urls.genre}`)
  }
}

