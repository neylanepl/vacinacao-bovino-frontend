import React from 'react';


import { InputForm} from '../../components/inputs';
import { Form } from 'react-bootstrap';
import '../../styles/css/cadastrarBovino.css';
import { Button } from 'react-bootstrap';


const CadastrarBovino = () => {

    return(
        <div>
            
            <div  className="d-flex flex-wrap py-3 " style={{background: "#83A93A"}}>
                <button class="botaoVoltar">
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg> 
                </a></button>
            </div>
            
                <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Cadastro de Bovinos </h1>
                <div className="formularioCadastroBovino" style={{marginBottom: "10%"}}>
                    <form className="formulario" >
                        <div className="sub-div">
                            <div className="id_"><p>Nome</p></div> 
                            <input type="text" className="nomeBovino"/>

                            <div className="id_"><p>Peso</p></div> 
                            <input type="number" className="pesoBovino"/>

                            <div className="id_"><p>Idade</p></div> 
                            <input type="date" className="idadeBovino"/>
                            
                            <div className="id_"><p>Sexo</p></div> 
                            <div className="id_">
                                <div className="check-option" style={{marginBottom: "15px"}}>
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Femea"
                                    />
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Macho"
                                    />
                                </div>
                            </div>

                            <div className="id_"><p>Cor</p></div> 
                            <div className="id_">
                                <div className="check-option" style={{marginBottom: "15px"}}>
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Preto"
                                    />
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Branco"
                                    />
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Laranja"
                                    />
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Amarelo"
                                    />
                                    <Form.Check name={'sexo'}
                                        type="radio"
                                        label="Vermelho"
                                    />
                                   
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00"}}>Cadastrar</button>
                        </div>
                        
                    </form>
                
                </div>
           
                <div className="footer fixed-bottom" style={{background: "#83A93A", height: "10%"}}> </div>
        </div>


        
    );
};

export default CadastrarBovino;
