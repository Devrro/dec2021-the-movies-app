import {IFilm} from "./IFilm";

export interface IResponseObj {
  page: number,
  results: IFilm[],
  total_pages: number,
  total_results: number,
}
