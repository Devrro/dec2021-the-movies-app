import {environment} from "../../environments/environment";

const {URL} = environment

export const urls ={
  popMovies:`${URL}/movie/popular`,
  discoverMovies:`${URL}/discover/movie`,
  movieID:`${URL}/movie/`,
  genre:`${URL}/genre/movie/list`
}
