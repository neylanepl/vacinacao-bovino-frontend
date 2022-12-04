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

function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/' element={<Inicio/>} />
          <Route path='/cadastrarbovino' element={<CadastrarBovino/>} />
          <Route path='/editarbovino' element={<EditarBovino/>} />
          <Route path='/cadastraraplicacao' element={<CadastrarAplicacao/>} />
          <Route path='/carteiravacinacao' element={<CarteiraVacinacao/>} />
          <Route path='/listaanimaiscarteiravacinacao' element={<ListaAnimaisCarteiraVacinacao/>} />
          <Route path='/cadastrarvacina' element={<CadastrarVacina/>} />
          <Route path='/editarvacina' element={<EditarVacina/>} />
          <Route path='/listarvacinas' element={<ListarVacinas/>} />

          <Route path='/login' element={<Login/>} />
          <Route path='/cadastrarPessoa' element={<CadastrarPessoa/>} />
          <Route path='/editarPessoa' element={<EditarPessoa/>} />
          <Route path='/listaPessoa' element={<ListaPessoa/>} />
          <Route path='/cadastrarFabricante' element={<CadastrarFabricante/>} />
          <Route path='/listaFabricante' element={<ListaFabricante/>} />
          <Route path='/editarFabricante' element={<EditarFabricante/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
