import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarPessoa.css';
import Nav from '../../components/nav';

import VacinacaoBovinoAPI from '../../scripts/connectionAPI';

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
    const [papelForm, setPapelForm] = useState('');

    const navigate = useNavigate();

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
            senha: senhaForm,
            papel: papelForm
        };

        try {
            const { data } = await VacinacaoBovinoAPI.post('/pessoa/adicionarPessoa', payload);
            navigate('/');
        } catch (error) {
            alert("Campo(s) preenchido(s) incorretamente!");
        }
    };

    return (
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> CADASTRE-SE </h1>
            <div className="formularioLogin" style={{marginBottom: "10%"}}>
                <form className="formulario" onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div> 
                        <input type="text" className="nomePessoa" required onChange={e => setNomeForm(e.target.value)}/>

                        <div className="id_"><p>Telefone</p></div> 
                        <input className="telefonePessoa" onChange={e => setTelefoneForm(e.target.value)}
                            type="tel" id="phone" name="phone" placeholder="84991919191" 
                            pattern="[0-9]{11}" required/>

                        <div className="id_"><p>CPF</p></div> 
                        <input type="text" className="CPFPessoa" required onChange={e => setCPFForm(e.target.value)}
                            placeholder="00000000000" pattern="[0-9]{11}" />

                        <div className="id_"><p>Email</p></div> 
                        <input type="email" className="emailPessoa" required onChange={e => setEmailForm(e.target.value)}/>

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

                        <div className="id_"><p>Usuário</p></div> 
                        <input type="text" className="numeroPessoa" required onChange={e => setLoginForm(e.target.value)}/>

                        <div className="id_"><p>Senha</p></div> 
                        <input type="password" className="numeroPessoa" required onChange={e => setSenhaForm(e.target.value)}/>

                        <div className="id_"><p></p></div> 
                        <select name="select" className="numeroPessoa" required onChange={e => setPapelForm(e.target.value)} >
                            <option value="">Selecione uma opção</option>
                            <option value="PROPRIETARIO">Proprietário</option>
                            <option value="VETERINARIO">Veterinário</option>
                        </select>

                        <div>
                            <button variant="warning"  type="submit" value="submit" className="btn btn-success" 
                                style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "30px 30px 0 0"}}>
                                Cadastre-se
                            </button>
                            <button className="btn btn-success" 
                                style={{backgroundColor:"#6D3B00", borderColor: "#6D3B00", marginTop: "30px"}} variant="warning"  
                                onClick={e => navigate('/login')}>
                                Login
                            </button>
                        </div>
                    </div>            
                </form>
            </div>
            
        </div>
    );   
};

export default CadastrarPessoa;