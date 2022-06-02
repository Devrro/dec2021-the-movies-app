import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenres} from "../models/IGenres";

@Injectable({
  providedIn: 'root'
})
export class GenreStorageService {


  genresIsSet = new BehaviorSubject<boolean>(false)
  storage = new BehaviorSubject<IGenres[]>([])

  constructor() { }
}
