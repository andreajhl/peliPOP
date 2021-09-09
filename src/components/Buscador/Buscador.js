import React from "react";
import { useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

import {addMovieFavorite} from '../../actions/index'

import '../../styles/Buscador.scss'
import {HeartFilled} from '@ant-design/icons'

export default function Buscador ({movies}){

const dispatch = useDispatch()
    return (
        <div className="movie">
            {
              movies && movies.map(movie =>(
                <div key={movie.imdbID} className="movie_Container">
                  <div className='movie_Container_img'>
                    <button className="btnO" onClick={()=>{dispatch(addMovieFavorite(movie))}}><HeartFilled className="i"/></button>
                    <img className='movie_Container_img_I' src={movie.Poster} alt='poster de pelicula'/>
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

