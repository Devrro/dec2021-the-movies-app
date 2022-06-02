import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {genres} from "../../constants";
import {IGenres} from "../../models/IGenres";
import {GenreStorageService} from "../../services/genre-storage.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genresList: IGenres[] = genres;

  genresOptions: FormGroup;

  constructor(
    fb: FormBuilder,
    private chosenGenreSt: GenreStorageService,
  ) {
    this.genresOptions = fb.group({
      action: null,
      adventure: null,
      animation: null,
      comedy: null,
      crime: null,
      documentary: null,
      drama: null,
      family: null,
      fantasy: null,
      history: null,
      horror: null,
      music: null,
      mystery: null,
      romance: null,
      sciencefiction: null,
      tvmovie: null,
      thriller: null,
      war: null,
      western: null,
    })
  }


  ngOnInit(): void {
  }

  saveGenresPreference(): void {
    const genresChosen = this.genresOptions.getRawValue()
    let chosenGenres = []
    for (let value of Object.keys(genresChosen)) {
      if (genresChosen[`${value}`] === true) {
        chosenGenres.push(...this.genresList.filter(x => x.name.toLowerCase() === value))
      }
    }
    if (chosenGenres) {
      this.chosenGenreSt.storage.next(chosenGenres)
      this.chosenGenreSt.genresIsSet.next(true)
    }else{}
      this.chosenGenreSt.genresIsSet.next(false)
  }
}
