import {environment} from "../../environments/environment";

const {URL} = environment

export const urls ={
  popMovies:`${URL}/movie/popular`,
  genre:`${URL}/movies/genre`
}
