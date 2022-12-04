import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import CadastrarBovino from './pages/bovino/cadastrarBovino';
import Inicio from './pages/inicio/inicio';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/' element={<Inicio/>} />
          <Route path='/cadastrarbovino' element={<CadastrarBovino/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
