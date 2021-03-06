const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    render:false
 }

export const Reducers= (state= initialState, action)=> {
    switch(action.type){
        case "GET_MOVIES":
            return {
             ...state,
             render:false,
             moviesLoaded: action.payload
        }
        case "GET_MOVIES_INICIO":
            return{
                ...state,
                moviesLoaded:[action.payload,...state.moviesLoaded],
                render:true
            }
        case 'ADD_MOVIE_FAVORITE':
            var search=state.moviesFavourites.find(e=>e ===action.payload)
            return {
             ...state,
             moviesFavourites: search ? state.moviesFavourites : [action.payload,...state.moviesFavourites]
              }
        case 'GET_MOVIES_DETAIL':
            return {
                ...state,
                movieDetail: action.payload
            }
        case "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload)
            }
        default:
            return state;
    }
}
