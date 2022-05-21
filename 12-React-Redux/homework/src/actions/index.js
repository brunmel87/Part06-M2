export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";


export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}
  
export function getMovies(titulo) {
  return function(dispatch) {
     return fetch("http://www.omdbapi.com/?apikey=33084a5d&s=" + titulo)
     .then(response => response.json())
     .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
    });
  };
}

// VERSION getMovies con axios
// primero hago npm install axios
// despues hago lo importo --> import axios from 'axios';

// export function getMovies(titulo) {
//     return function(dispatch) {
//        return axios.get("http://www.omdbapi.com/?apikey=33084a5d&s=" + titulo)
//        .then(response => response.data)
//        .then(data => {
//           dispatch({ type: "GET_MOVIES", payload: json });
//       });
//     };
//   }

export function removeMovieFavorite(idMovie) {
    return { type: REMOVE_MOVIE_FAVORITE, payload: idMovie };
}

export function getMovieDetail(idMovie) {
return function(dispatch) {
    return fetch('http://www.omdbapi.com/?apikey=33084a5d&i=' + idMovie)
    .then(response => response.json())
    .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
    });
    };
}

  