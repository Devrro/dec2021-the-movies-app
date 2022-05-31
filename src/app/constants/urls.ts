import {environment} from "../../environments/environment";

const {URL} = environment

export const urls ={
  popMovies:`${URL}/movie/popular`,
  movieID:`${URL}/movie/`,
  genre:`${URL}/movies/genre`
}
