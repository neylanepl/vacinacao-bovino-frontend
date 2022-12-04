import React, { useState } from 'react';

import '../../styles/css/cadastrarBovino.css';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const CadastrarAplicacao = () => {
    var vacinas = [];
    const [doseForm, setDoseForm] = useState(0);
    const [dataForm, setDataForm] = useState('');

    const handleSubmitForm = async e => {}

    return(
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastro de Aplicações de Vacina </h1>
            <div className="formularioCadastroBovino" style={{marginBottom: "10%"}}>
                <form onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                    <div className="id_"><p>Vacina</p></div> 
                        <select className="nomeBovino" name="vacina" 
                            onChange={(e) => { }}>
                            <option value=""> Selecione uma vacina </option>
                            {vacinas
                                .map((item, key) => {
                                    return (
                                        <option key={key} value={item.id}>
                                            {item.title}
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
            <Footer/>
        </div>
    );
};

export default CadastrarAplicacao;

