import React, {useState, useEffect} from 'react';
import './App.css';

const GIFS = [
  'https://media3.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47spcm71hlbd9eupshys5slouenzsyc9r7uvr0r4zr&rid=200w.webp',
  'https://media1.giphy.com/media/l378vMO5yhVuap3pe/200w.webp?cid=ecf05e47s5maedwmxx2vpnbligdsckjquop5g3ps912mj85h&rid=200w.webp'
]
const DIFFERENT_GIFS = [
  'https://media3.giphy.com/media/tz6S94VbrauGs/giphy.gif?cid=ecf05e47uo64abl2o36fwy7cey2q7vp1m5t8s1sc7heidykg&rid=giphy.gif',
  'https://media2.giphy.com/media/1J4X5chVxtBFS/giphy.gif?cid=ecf05e47cae6974ef6fbadd5949bfeac5e1f66afc5e4d864&rid=giphy.gif'
]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(() => {         
    // por defecto useEffect se ejecuta cada vez que se re-renderiza el componente
      console.log('Efecto')
    }, [])  // Como segundo paramentro a useEffect se le pasan las dependencias
    // Las dependencias son variables o informacion que se cambia debe ejecutarse este efecto
    // con dependencias vacias se ejecuta una sola vez EQU a ComponentDidMount()
  
  return (
    <div className='App'>
    <section className='App-content'>
      {gifs.map((singleGif,keyGif) => (<img key={keyGif} src={singleGif} />))}
      <button 
        className='btn btn-primary'
        onClick={() => setGifs(DIFFERENT_GIFS)} //min 25.05
        >Cambiar Gifs
      </button>
    </section> 
    </div>
  );
}

export default App;
