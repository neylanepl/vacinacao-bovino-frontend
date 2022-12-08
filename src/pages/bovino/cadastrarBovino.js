import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarBovino.css';
import Nav from '../../components/nav';

import VacinacaoBovinoAPI from '../../scripts/connectionAPI';

const CadastrarBovino = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [pesoForm, setPesoForm] = useState(0);
    const [dataForm, setDataForm] = useState('');
    const [sexoForm, setSexoForm] = useState('');
    const [corForm, setCorForm] = useState('');
    const [chifreForm, setChifreForm] = useState(false);

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            aniversario : dataForm,
            sexo: sexoForm,
            cor: corForm,
            peso: pesoForm,
            chifre: chifreForm
        };

        try {
            const { data } = await VacinacaoBovinoAPI.post('/bovino/adicionarBovino', payload);
            navigate('/');
        } catch (error) {
            alert("Campo(s) preenchido(s) incorretamente!");
        }
    }

    return(
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastrar Bovinos </h1>
            <div className="formularioCadastroBovino" style={{marginBottom: "10%"}}>
                <form className="formulario" onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div> 
                        <input type="text" className="nomeBovino" required onChange={e => setNomeForm(e.target.value)}/>

                        <div className="id_"><p>Peso</p></div> 
                        <input type="number" className="pesoBovino" required onChange={e => setPesoForm(e.target.value)}/>

                        <div className="id_"><p>Idade</p></div> 
                        <input type="date" className="idadeBovino" required onChange={e => setDataForm(e.target.value)}/>
                            
                        <div className="id_"><p>Sexo</p></div> 
                        <select name="select" className="numeroPessoa" required onChange={e => setSexoForm(e.target.value)} >
                            <option value="">Selecione um sexo</option>
                            <option value="Femea">Fêmea</option>
                            <option value="Macho">Macho</option>
                        </select>

                        <div className="id_"><p>Cor</p></div> 
                        <select name="select" className="numeroPessoa" required onChange={e => setCorForm(e.target.value)} >
                            <option value="">Selecione uma cor</option>
                            <option value="Preto">Preto</option>
                            <option value="Branco">Branco</option>
                            <option value="Laranja">Laranja</option>
                            <option value="Amarelo">Amarelo</option>
                            <option value="Vermelho">Vermelho</option>
                        </select>

                        <div className="id_"><p>Chifre</p></div> 
                        <select name="select" className="numeroPessoa" required onChange={e => {e.target.value === 'Sim' ? setChifreForm(true):setChifreForm(false)}} >
                            <option value="">Selecione se possui chifre</option>
                            <option value="Sim">Sim</option>
                            <option value="Nao">Não</option>
                        </select>
                        <button variant="warning"  type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Cadastrar</button>
                    </div>            
                </form>
            </div>  
        </div>
    );
};

export default CadastrarBovino;
