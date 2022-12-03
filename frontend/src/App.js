import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import CadastrarBovino from './pages/bovino/cadastrarBovino';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/cadastrarbovino' element={<CadastrarBovino/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
