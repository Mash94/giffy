import React, {useState, useEffect} from 'react';
import './App.css';
import getGif from './services/getGif'

function App() {  // min 48.20
  const [gifs, setGifs] = useState([])

  useEffect(() => {         
    // por defecto useEffect se ejecuta cada vez que se re-renderiza el componente
      //console.log('Efecto')
      const GIF_params = {
        keyword: 'harry potter',
        limit: 10
      }
      getGif(GIF_params).then(gif => setGifs(gif))
    }, [])  // Como segundo paramentro a useEffect se le pasan las dependencias
    // Las dependencias son variables o informacion que se cambia debe ejecutarse este efecto
    // con dependencias vacias se ejecuta una sola vez EQU a ComponentDidMount()
  
  return (
    <div className='App-content'>
      {
        gifs.map((singleGif) => { return (
          <div key={singleGif.id}>
            <h4 className='App'>{singleGif.title}</h4>
            <img alt={singleGif.title} src={singleGif.image} />
          </div>
        )})
      }
    </div>
  );
}

export default App;
