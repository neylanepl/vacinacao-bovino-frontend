import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import '../../styles/css/cadastrarBovino.css';
import Nav from '../../components/nav';

import { handleGetMethod } from '../../scripts/connectionAPI';
import VacinacaoBovinoAPI from '../../scripts/connectionAPI';

const CadastrarAplicacao = () => {
    const [vacinaForm, setVacinaForm] = useState(0);
    const [doseForm, setDoseForm] = useState(0);
    const [dataForm, setDataForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();

        const payload = {
            vacina: vacinaForm,
            dose: doseForm,
            data: dataForm
        };

        console.log(payload);

        try {
            const { data } = await VacinacaoBovinoAPI.post('/aplicacao/adicionarAplicacao', payload);
            navigate('/');
        } catch (error) {
            alert("Campo(s) preenchido(s) incorretamente!");
        }

    }

    const vacinasPath = 'vacina/obterListaVacina';
    const [vacinas, setVacinas] = useState([]);
    useEffect(() => {
        handleGetMethod(vacinasPath, setVacinas);
    }, []);

    return(
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastrar Aplicação de Vacina </h1>
            <div className="formularioCadastroBovino" style={{marginBottom: "10%"}}>
                <form onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                    <div className="id_"><p>Vacina</p></div> 
                        <select className="nomeBovino" name="vacina" 
                            onChange={(e) => {setVacinaForm(e.target.value)}}>
                            <option value=""> Selecione uma vacina </option>
                            {vacinas
                                .map((item, key) => {
                                    return (
                                        <option key={key} value={item.id}>
                                            {item.nome}
                                        </option>
                                    );
                                })
                            }
                        </select>

                        <div className="id_"><p>Dose</p></div> 
                        <input type="number" className="pesoBovino" onChange={e => setDoseForm(e.target.value)}/>

                        <div className="id_"><p>Data</p></div> 
                        <input type="date" className="idadeBovino" onChange={e => setDataForm(e.target.value)}/>

                        <button variant="warning"  type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Cadastrar</button>
                    </div>            
                </form>
            </div>
        </div>
    );
};

export default CadastrarAplicacao;

