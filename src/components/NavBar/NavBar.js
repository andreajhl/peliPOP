import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

import {getMovies} from '../../actions/index'

import '../../styles/NavBar.scss';

export function NavBar({getMovies}) {
    const [state, setState]= useState({title:''})

    const handleChange=({target})=> {
        setState({ title: target.value });//cambie el valor del estado de mi titulo destructurandolo y pasandole el valor del input
    }
    
    const handleSubmit=(e) =>{
        e.preventDefault();
        getMovies(state.title)// busque las pelioculas con lo que me pasan en el input por el metodo que tengo en MIS PROPS
        setState({title: ''})
    }

    return (
      <div className="nav">
          <div className="form" >
        
                <div className="fm" >
                    <button type="submit" className="btn" onClick={handleSubmit} >BUSCAR</button>
                    <form >
                        <input
                        className='input'
                        placeholder='titulo...'
                        type="text"
                        id="title"
                        autoComplete="off"
                        value={state.title}//te di el valor que tengo en mi estado
                        onChange={handleChange}//escucha constantemente los cambios
                        />
                    </form> 
                </div>
            </div>
            <div className="list">
                <NavLink exact to="/"  className="a">Home</NavLink>
                <NavLink to="/favs" className="a" >Favoritas</NavLink>
            </div>
      </div>
    )
}
  
  function mapDispatchToProps(dispatch) {
    return {
      getMovies: title => dispatch(getMovies(title))
    };//son los metodos que puedo usar y que le envio a mi store para usar
  }

export default connect(
    null,  //esto une todo a redux en su buscador 
    mapDispatchToProps
  )(NavBar); 