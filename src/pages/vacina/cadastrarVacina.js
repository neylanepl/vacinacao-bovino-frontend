import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav';
import '../../styles/css/cadastrarVacina.css';
import VacinacaoBovinoAPI, { handleGetMethod } from '../../scripts/connectionAPI';

const CadastrarVacina = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState(0);
    const [periodoEmDiasForm, setPeriodoEmDiasForm] = useState(0);
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();

        const payload = {
            nome: nomeForm,
            periodoEmDias: periodoEmDiasForm,
            informacoesExtras: informacoesExtrasForm,
            idFabricante: fabricanteForm
        };

        try {
            const { data } = await VacinacaoBovinoAPI.post('/vacina/adicionarVacina', payload);
            navigate('/');
        } catch (error) {
            alert("Campo(s) preenchido(s) incorretamente!");
        }
    };

    const fabricantesPath = 'fabricante/obterListaFabricante';
    const [fabricantes, setFabricantes] = useState([]);
    useEffect(() => {
        handleGetMethod(fabricantesPath, setFabricantes);
    }, []);


    return(
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastrar Vacina </h1>
            <div className="formularioCadastroVacina" >
                <form className="formulario" onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                        <div className="id_"><p>Nome</p></div> 
                        <input style={{padding: "5px", paddingLeft: "10px"}} type="text" required className="nomeVacina" onChange={e => setNomeForm(e.target.value)}/>

                        <div className="id_"><p>Fabricante</p></div> 
                        <select className="fabricanteVacina" style={{padding: "5px", paddingLeft: "10px"}} name="fabricante" 
                            onChange={(e) => {setFabricanteForm(e.target.value)}} required >
                            <option value=""> Selecione um fabricante </option>
                            {fabricantes
                                .map((item, key) => {
                                    return (
                                        <option key={key} value={item.id}>
                                            {item.nome}
                                        </option>
                                    );
                                })
                            }
                        </select>
                        
                        <div className="id_"><p>Per??odo em dias</p></div> 
                        <input style={{padding: "5px", paddingLeft: "10px"}} required type="number" className="periodoVacina" onChange={e => setPeriodoEmDiasForm(e.target.value)}/>

                        <div className="id_"><p>Informa????es Extras</p></div> 
                        <input style={{padding: "5px", paddingLeft: "10px"}} required type="text" className="informacaoVacina" onChange={e => setInformacoesExtrasForm(e.target.value)}/>
                        
                        <button variant="warning"  type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Cadastrar</button>
                    </div>            
                </form>
            </div>
        </div>
    );
};

export default CadastrarVacina;