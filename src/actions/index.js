export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function  removeMovieFavorites(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}
  
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}
export function getMoviesDetail(id) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=20dac387&i="+ id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
        });
    };
}
