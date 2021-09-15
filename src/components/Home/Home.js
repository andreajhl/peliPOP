import React,{useEffect, useState} from "react";
import {useSelector,useDispatch } from "react-redux";

import Buscador from "../Buscador/Buscador";

import {getMoviesInicioPresent, getMoviesInicio} from '../../actions/index';

import '../../styles/Home.scss'

export default function Home () {
    const state = useSelector(state => state.moviesLoaded)
    const render = useSelector(state => state.render)
    const [color, setcolor] = useState(true)
    const dispatch = useDispatch()

    async function inicio() {
        let peliInicio= await getMoviesInicio()
            peliInicio = peliInicio['Movie Content-Rating Filter'].splice(0,10).map(e=>e.title)
            return peliInicio
    }
    
    useEffect(() => {
        async function fetchData(){
            if(state.length===0) {
                var peli=await  inicio()
                peli.map(e=>dispatch(getMoviesInicioPresent(e)))
            }
        }
        fetchData()
    }, [state,dispatch])

    setTimeout(() => {
        var titulo= document.getElementById('titulo1')
        if(titulo) {
           if(color){
               titulo.style.color='white'
               titulo.style.textShadow='2px 1px 5px black'
               setcolor(false)
           }else{
               titulo.style.color='white'
               titulo.style.textShadow='2px 1px 5px black'
               setcolor(true)
           }
        }
    }, 500);

    return (
        <div className='home'>
            {render && <h1 id='titulo1' className='tituloranking'>Peliculas con mejor Ranking</h1>}
            <Buscador movies={state}/>
        </div>
    )
}
