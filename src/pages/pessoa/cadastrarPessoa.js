import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import '../../styles/css/cadastrarPessoa.css';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const CadastrarPessoa = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [telefoneForm, setTelefoneForm] = useState('');
    const [cpfForm, setCPFForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [cidadeForm, setCidadeForm] = useState('');
    const [estadoForm, setEstadoForm] = useState('');
    const [cepForm, setCEPForm] = useState('');
    const [bairroForm, setBairroForm] = useState('');
    const [ruaForm, setRuaForm] = useState('');
    const [numeroForm, setNumeroForm] = useState('');
    const [loginForm, setLoginForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            telefone: telefoneForm,
            cpf: cpfForm,
            email: emailForm,
            cidade: cidadeForm,
            estado: estadoForm,
            cep: cepForm,
            bairro: bairroForm,
            rua: ruaForm,
            numero: numeroForm,
            login: loginForm,
            senha: senhaForm
        };
    };

    return (
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastro Usuário </h1>
            <div className="formularioLogin" style={{marginBottom: "10%"}}>
                <form className="formulario" onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div> 
                        <input type="text" className="nomePessoa" onChange={e => setNomeForm(e.target.value)}/>

                        <div className="id_"><p>Telefone</p></div> 
                        <input type="text" className="telefonePessoa" onChange={e => setTelefoneForm(e.target.value)}/>

                        <div className="id_"><p>CPF</p></div> 
                        <input type="number" className="CPFPessoa" onChange={e => setCPFForm(e.target.value)}/>

                        <div className="id_"><p>Email</p></div> 
                        <input type="text" className="emailPessoa" onChange={e => setEmailForm(e.target.value)}/>

                        <div className="id_"><p>Cidade</p></div> 
                        <input type="text" className="cidadePessoa" onChange={e => setCidadeForm(e.target.value)}/>

                        <div className="id_"><p>Estado</p></div> 
                        <input type="text" className="estadoPessoa" onChange={e => setEstadoForm(e.target.value)}/>

                        <div className="id_"><p>CEP</p></div> 
                        <input type="number" className="CEPPessoa" onChange={e => setCEPForm(e.target.value)}/>

                        <div className="id_"><p>Bairro</p></div> 
                        <input type="text" className="bairroPessoa" onChange={e => setBairroForm(e.target.value)}/>

                        <div className="id_"><p>Rua</p></div> 
                        <input type="text" className="ruaPessoa" onChange={e => setRuaForm(e.target.value)}/>

                        <div className="id_"><p>Número</p></div> 
                        <input type="number" className="numeroPessoa" onChange={e => setNumeroForm(e.target.value)}/>

                        <div className="id_"><p>Login</p></div> 
                        <input type="text" className="numeroPessoa" onChange={e => setLoginForm(e.target.value)}/>

                        <div className="id_"><p>Senha</p></div> 
                        <input type="password" className="numeroPessoa" onChange={e => setSenhaForm(e.target.value)}/>

                        <button variant="warning"  type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Cadastrar</button>
                    </div>            
                </form>
            </div>
            <Footer/>
        </div>
    );   
};

export default CadastrarPessoa;