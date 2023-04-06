import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detalhes from './Components/Detalhes/detalhes';
import Contato from './Components/contato/contato';
import Fotos from './Components/Fotos/Fotos';
import Comentários from './Components/Comentário/cometários';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Fotos' element={<Fotos/>}/>
    <Route path='/contato' element={<Contato/>}/>
    <Route path='/Comentários' element={<Comentários/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;




