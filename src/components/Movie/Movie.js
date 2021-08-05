import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {getMoviesDetail} from '../../actions/index';


import '../../styles/Movie.scss';

export function Movie ({getMovieDetail,match,detail}) {
    
    const movieId = match.params.id;
    
    useEffect(() => {
         getMovieDetail(movieId)
    },[getMovieDetail,movieId])
    
        return (
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'500px', width:'100%'}}>
                <div className="movie-detail">
                        <img className="movie-detail_img" src={detail.Poster} alt='poster de pelicula' />
                    <div className="movie-detail_cuerpo">
                        <h2 className='h2' >{detail.Title} <label>{detail.imdbRating}</label></h2>
                        <div className="movie-detail_cuerpo_I">
                            <p style={{margin:'4px'}}>{detail.Year}</p>
                            <p style={{margin:'4px'}}>{detail.Genre}</p>
                        </div>
                        <p style={{marginLeft:'10px',marginRight:'10px', maxWidth:'250px',lineHeight:'150%'}}>{detail.Plot}</p>
                    </div>
                </div>
            </div>
        );

}

function mapStateToProps(state) {
   return{
    detail : state.movieDetail
   }  
}

function mapDispatchToProps(dispatch) {
    return{
        getMovieDetail: idMovie => dispatch(getMoviesDetail(idMovie))
    }
    
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);