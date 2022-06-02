import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {IFilm} from "../../models/IFilm";
import {IResponseObj} from "../../models/IResponseObj";
import {ActivatedRoute, Router} from "@angular/router";
import {GenreStorageService} from "../../services/genre-storage.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  pageResponse: IResponseObj;
  movies: IFilm[];
  pages: number[] = [];


  constructor(
    private movieService: MoviesService,
    private ac: ActivatedRoute,
    private genreStorage: GenreStorageService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.genreStorage.genresIsSet.subscribe((value) => {
      if (value) {
        this.genreStorage.storage.subscribe(value => {
          let id = value.map(x=>x.id).join(',')
          console.log(id);
          this.ac.queryParams.subscribe(({page}) => {
              this.movieService.getPopularMovies(page,id).subscribe(value => {
                this.movies = value.results
                this.pages = this.pagination(parseInt(page), 500, 4)
              })
            }
          )
        })
      } else{
        this.ac.queryParams.subscribe(({page}) => {
            this.movieService.getPopularMovies(page).subscribe(value => {
              this.movies = value.results
              this.pages = this.pagination(parseInt(page), 500, 4)
            })
          }
        )
      }
    })
  };


  setPage(page: number) {
    this.route.navigate([``], {relativeTo: this.ac, queryParams: {page: page}}).then()
  }

  getRange(start: number, end: number) {
    return Array(end - start + 1).fill(0).map((_, i) => i + start);
  }

  pagination(current: number, length: number, delta: number = 4) {
    const range = {
      start: Math.round(current - delta / 2),
      end: Math.round(current + delta / 2)
    };

    if (range.start - 1 === 1 || range.end + 1 === length) {
      range.start += 1;
      range.end += 1;
    }

    let pages = current > delta ? this.getRange(
      Math.min(range.start, length - delta),
      Math.min(range.end, length)
    ) : this.getRange(1, Math.min(length, delta + 1));

    const withEndings = (value: number, pair: any[]) => pages.length + 1 !== length ? pair : [value];

    if (pages[0] !== 1) {
      pages = withEndings(1, [1]).concat(pages);
    }

    // if (pages[pages.length - 1] < length) {
    //   pages = pages.concat(withEndings(length, [length]));
    // }

    return pages;
  }

}
