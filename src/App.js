import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio/inicio';
import CadastrarBovino from './pages/bovino/cadastrarBovino';
import EditarBovino from './pages/bovino/editarBovino';
import CadastrarAplicacao from './pages/aplicacao/cadastrarAplicacao';
import CarteiraVacinacao from './pages/aplicacao/carteiraVacinacao';
import ListaAnimaisCarteiraVacinacao from './pages/aplicacao/listaAnimaisCarteiraVacinacao';
import CadastrarVacina from './pages/vacina/cadastrarVacina';
import EditarVacina from './pages/vacina/editarVacina';
import ListarVacinas from './pages/vacina/listarVacinas';
import Login from './pages/pessoa/login';
import CadastrarPessoa from './pages/pessoa/cadastrarPessoa';
import EditarPessoa from './pages/pessoa/editarPessoa';
import ListaPessoa from './pages/pessoa/listaPessoa';
import CadastrarFabricante from './pages/fabricante/cadastrarFabricante';
import ListaFabricante from './pages/fabricante/listaFabricante';
import EditarFabricante from './pages/fabricante/editarFabricante';
import RotaPrivada from './pages/rotaPrivada/rotaPrivada';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastrarPessoa' element={<CadastrarPessoa/>} />
          <Route path='/' element={<RotaPrivada><Inicio/></RotaPrivada>} />
          <Route path='/cadastrarbovino' element={<RotaPrivada><CadastrarBovino/></RotaPrivada>} />
          <Route path='/editarbovino' element={<RotaPrivada><EditarBovino/></RotaPrivada>} />
          <Route path='/cadastraraplicacao' element={<RotaPrivada><CadastrarAplicacao/></RotaPrivada>} />
          <Route path='/carteiravacinacao' element={<RotaPrivada><CarteiraVacinacao/></RotaPrivada>} />
          <Route path='/listaanimaiscarteiravacinacao' element={<RotaPrivada><ListaAnimaisCarteiraVacinacao/></RotaPrivada>} />
          <Route path='/cadastrarvacina' element={<RotaPrivada><CadastrarVacina/></RotaPrivada>} />
          <Route path='/editarvacina' element={<RotaPrivada><EditarVacina/></RotaPrivada>} />
          <Route path='/listarvacinas' element={<RotaPrivada><ListarVacinas/></RotaPrivada>} />
          <Route path='/editarPessoa' element={<RotaPrivada><EditarPessoa/></RotaPrivada>} />
          <Route path='/listaPessoa' element={<RotaPrivada><ListaPessoa/></RotaPrivada>} />
          <Route path='/cadastrarFabricante' element={<RotaPrivada><CadastrarFabricante/></RotaPrivada>} />
          <Route path='/listaFabricante' element={<RotaPrivada><ListaFabricante/></RotaPrivada>} />
          <Route path='/editarFabricante' element={<RotaPrivada><EditarFabricante/></RotaPrivada>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
