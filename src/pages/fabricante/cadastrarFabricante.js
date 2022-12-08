import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarFabricante.css';
import Nav from '../../components/nav';

import VacinacaoBovinoAPI from '../../scripts/connectionAPI';

const CadastrarFabricante = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [ddgForm, setDDGForm] = useState('');
    const [cnpjForm, setCNPJForm] = useState('');
    const [nacionalidadeDaIndustriaForm, setNacionalidadeDaIndustriaForm] = useState('');
    const [cidadeForm, setCidadeForm] = useState('');
    const [estadoForm, setEstadoForm] = useState('');
    const [cepForm, setCEPForm] = useState('');
    const [bairroForm, setBairroForm] = useState('');
    const [ruaForm, setRuaForm] = useState('');
    const [numeroForm, setNumeroForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            ddg: ddgForm,
            cnpj: cnpjForm,
            nacionalidadeIndustria: nacionalidadeDaIndustriaForm,
            cidade: cidadeForm,
            estado: estadoForm,
            cep: cepForm,
            bairro: bairroForm,
            rua: ruaForm,
            numero: numeroForm
        };

        try {
            const { data } = await VacinacaoBovinoAPI.post('/fabricante/adicionarFabricante', payload);
            navigate('/');
        } catch (error) {
            alert("Campo(s) preenchido(s) incorretamente!");
        }
    }

    return (
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastrar Fabricante </h1>
            <div className="formularioFabricante" style={{marginBottom: "10%"}}>
                <form className="formulario" onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div> 
                        <input type="text" className="nomeFabricante" onChange={e => setNomeForm(e.target.value)}/>

                        <div className="id_"><p>DDG</p></div> 
                        <input type="text" className="ddgFabricante" onChange={e => setDDGForm(e.target.value)}/>

                        <div className="id_"><p>CNPJ</p></div> 
                        <input type="number" className="cnpjFabricante" onChange={e => setCNPJForm(e.target.value)}/>

                        <div className="id_"><p>Nacionalidade de indústria</p></div> 
                        <input type="text" className="nacionalidadeDaIndustriaFabricante" onChange={e => setNacionalidadeDaIndustriaForm(e.target.value)}/>

                        <div className="id_"><p>Cidade</p></div> 
                        <input type="text" className="cidadeFabricante" onChange={e => setCidadeForm(e.target.value)}/>

                        <div className="id_"><p>Estado</p></div> 
                        <input type="text" className="estadoFabricante" onChange={e => setEstadoForm(e.target.value)}/>

                        <div className="id_"><p>CEP</p></div> 
                        <input type="number" className="CEPFabricante" onChange={e => setCEPForm(e.target.value)}/>

                        <div className="id_"><p>Bairro</p></div> 
                        <input type="text" className="bairroFabricante" onChange={e => setBairroForm(e.target.value)}/>

                        <div className="id_"><p>Rua</p></div> 
                        <input type="text" className="ruaFabricante" onChange={e => setRuaForm(e.target.value)}/>

                        <div className="id_"><p>Numero</p></div> 
                        <input type="number" className="numeroFabricante" onChange={e => setNumeroForm(e.target.value)}/>


                        <button variant="warning"  type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Cadastrar</button>
                    </div>            
                </form>
            </div>
        </div>
    );   

}


export default CadastrarFabricante;