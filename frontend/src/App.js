import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio/inicio';
import CadastrarBovino from './pages/bovino/cadastrarBovino';
import CadastrarAplicacao from './pages/aplicacao/cadastrarAplicacao';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/' element={<Inicio/>} />
          <Route path='/cadastrarbovino' element={<CadastrarBovino/>} />
          <Route path='/cadastraraplicacao' element={<CadastrarAplicacao/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
