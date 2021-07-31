import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
 
import {removeMovieFavorites} from '../../actions/index'

import '../../styles/Buscador.scss' 
import {CloseCircleOutlined} from '@ant-design/icons'

export function ConnectedList ({moviesFavourites,removeMovieFavorite}) {

  return (
    <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <div style={{width:'100%'}} className="movie">
          {
          moviesFavourites.map( movie =>(
            <div key={movie.imdbID} className="movie_Container">
                <div className='movie_Container_img'>
                  <button className="btnO" onClick={()=>{removeMovieFavorite(movie.imdbID)}}><CloseCircleOutlined className="i"/></button>
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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorites(idMovie))
  }; 
}


export default connect (
  mapStateToProps,  //esto une todo a redux en el componenet favoritos 
  mapDispatchToProps
)(ConnectedList);
