import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IFilm} from "../models/IFilm";

@Injectable({
  providedIn: 'root'
})
export class MovieSetterService {

  movieStorage= new BehaviorSubject<IFilm[]>([])

  constructor() { }
}
