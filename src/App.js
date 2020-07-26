import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs'

function App() {  // min 48.20

  return (
    <div className='App-content'>
      <ListOfGifs keyword='belguim' limit={2}/>
      <ListOfGifs keyword='chile' limit={3}/>      
    </div>
  );
}

export default App;
