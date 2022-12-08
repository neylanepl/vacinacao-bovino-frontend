import React, { useState, useEffect } from 'react';

import Nav from '../../components/nav';
import Footer from '../../components/footer';
import '../../styles/css/cadastrarVacina.css';
import rodape from '../../styles/css/footer.css'
import { handleGetMethod } from '../../scripts/connectionAPI';

const CadastrarVacina = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState(0);
    const [periodoEmDiasForm, setPeriodoEmDiasForm] = useState(0);
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    const handleSubmitForm = async e => {
        e.preventDefault();

        const payload = {
            nome: nomeForm,
            periodoEmDias: periodoEmDiasForm,
            informacoesExtras: informacoesExtrasForm,
            idFabricante: fabricanteForm
        };

        console.log(payload);
    };

    const fabricantesPath = 'fabricante/obterListaFabricante';
    const [fabricantes, setFabricantes] = useState([]);
    useEffect(() => {
        handleGetMethod(fabricantesPath, setFabricantes);
    }, []);


    return(
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastrar vacina </h1>
            <div className="formularioCadastroVacinas" >
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
                        
                        <div className="id_"><p>Período em dias</p></div> 
                        <input style={{padding: "5px", paddingLeft: "10px"}} required type="number" className="periodoVacina" onChange={e => setPeriodoEmDiasForm(e.target.value)}/>

                        <div className="id_"><p>Informações Extras</p></div> 
                        <input style={{padding: "5px", paddingLeft: "10px"}} required type="text" className="informacaoVacina" onChange={e => setInformacoesExtrasForm(e.target.value)}/>
                        
                        <button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Cadastrar</button>
                    </div>            
                </form>
            </div>
           {/* <Footer/> */}
        </div>
    );
};

export default CadastrarVacina;