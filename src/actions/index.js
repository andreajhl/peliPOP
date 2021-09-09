export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function  removeMovieFavorites(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}
  
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=7771e901&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json.Search });
        });
    };
}

export function getMoviesInicioPresent(titulo) {
  return async function(dispatch) {
    var peli=await fetch("https://www.omdbapi.com/?apikey=7771e901&s=" + titulo)
       peli = await peli.json()
       return dispatch({ type: "GET_MOVIES_INICIO", payload: peli.Search[0] });
      
  };  
}

export async function getMoviesInicio() {
    var inicio= await fetch("https://data-imdb1.p.rapidapi.com/movie/byContentRating/R/",{
      	"method": "GET",
        "headers": {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": "97b4cb77a4mshb6208e1e9129adfp1f128cjsn3fec747d66ca"
        }
    })
      inicio= await inicio.json()
      return inicio
}


export function getMoviesDetail(id) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?apikey=7771e901&i="+ id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
        });
    };
}
