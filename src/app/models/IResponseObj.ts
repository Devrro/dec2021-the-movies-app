import {IFilms} from "./films";

export interface IResponseObj {
  page: number,
  results: IFilms[],
  total_pages: number,
  total_results: number,
}
