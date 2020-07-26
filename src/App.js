import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {  // min 48.20
  
  return (
    <div className='App-content'>
      <h1>App de Gif</h1>
      <Link to='/gif/pandas&2'>Gif de Pandas</Link>
      <Link to='/gif/mapache&5'>Gif de Mapaches</Link>
      <Route path='/gif/:keyword&:limit' component={ListOfGifs} />
    </div>
  );
}

export default App;
