import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import {addMovieFavorite} from '../../actions/index'

import '../../styles/Buscador.scss'
import {HeartFilled} from '@ant-design/icons'

export function Buscador ({movies, addMovieFavorite}){

    return (
        <div className="movie">
            {
              movies && movies.map(movie =>(
                <div key={movie.imdbID} className="movie_Container">
                  <div className='movie_Container_img'>
                    <button className="btnO" onClick={()=>{addMovieFavorite(movie)}}><HeartFilled className="i"/></button>
                    <img className='movie_Container_img_1' src={movie.Poster} />
                  </div>
                  <div className='movie_Container_cuerpo'>
                     <Link to={`/movie/${movie.imdbID}`}  style={{textDecoration: 'none', color: 'rgb(245, 230, 202)'}}>
                      <p className="h4"> {movie.Title} </p>
                    </Link>
                  </div>
                 </div>
              ))
            }
        </div> 
    );
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };//cooloco lo que quiero que se muestre en mi store en mi pantalla, aca tengo las peliculas que me pasa la api
}

export default connect(
  mapStateToProps,  //esto une todo a redux en su buscador 
  {addMovieFavorite}
)(Buscador); 

