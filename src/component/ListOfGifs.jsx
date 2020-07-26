import React, {useState, useEffect} from 'react'
import Gif from './Gif'
import getGif from '../services/getGif'


export default function ListOfGifs({params}){
  const [gifs, setGifs] = useState([])
  const {keyword,limit} = params
  
  useEffect(() => {        // por defecto useEffect se ejecuta cada vez que se re-renderiza el componente 
    getGif({keyword, limit}).then(gif => setGifs(gif))
  }, [keyword,limit])  // Como segundo paramentro a useEffect se le pasan las dependencias
  // Las dependencias son variables o informacion que se cambia debe ejecutarse este efecto
  // con dependencias vacias se ejecuta una sola vez EQU a ComponentDidMount()
  
  return  (
    gifs.map((singleGif) => <Gif key={singleGif.id} {...singleGif} />) 
  )    
}