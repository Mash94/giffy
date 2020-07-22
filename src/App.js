import React, {useState, useEffect} from 'react';
import './App.css';
import getGif from './services/getGif'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {         
    // por defecto useEffect se ejecuta cada vez que se re-renderiza el componente
      //console.log('Efecto')
      const keyword = 'evangelion'
      const limit = 2
      getGif({keyword, limit}).then(gifs => setGifs(gifs))
    }, [])  // Como segundo paramentro a useEffect se le pasan las dependencias
    // Las dependencias son variables o informacion que se cambia debe ejecutarse este efecto
    // con dependencias vacias se ejecuta una sola vez EQU a ComponentDidMount()
  
  return (
    <div className='App-content'>
      {gifs.map((singleGif) => 
        <img key={singleGif.id} alt={'imagen'+singleGif.id} src={singleGif.image} />
      )}
    </div>
  );
}

export default App;
