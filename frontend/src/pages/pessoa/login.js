import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import '../../styles/css/login.css';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const Login = () => {

    const [nomeForm, setNomeForm] = useState('');
    const [senhaForm, setSenhaForm] = useState('');

    const handleSubmitForm = async e => {}

    return (
        <div>
            <Nav/>
            
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}> Login </h1>
            <div className="formularioLogin" style={{marginBottom: "10%"}}>
                <form className="formulario" onSubmit={e => {handleSubmitForm (e)}}>
                    <div className="sub-div">
                        <div className="id_"><p>Email</p></div> 
                        <input type="text" className="nomePessoa" onChange={e => setNomeForm(e.target.value)}/>

                        <div className="id_"><p>Senha</p></div> 
                        <input type="text" className="senhaPessoa" onChange={e => setSenhaForm(e.target.value)}/>

                        <button variant="warning"  type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", margin: "40px"}}>Entrar</button>
                    </div>            
                </form>
            </div>
            <Footer/>
        </div>
    );   
};


export default Login;