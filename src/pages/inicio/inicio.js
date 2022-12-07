import React, { useState } from 'react';
import imgVaca from '../../assets/vaca.png'

import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

import '../../styles/css/inicio.css';


const Inicio = () => {

    const navigate = useNavigate();

    return(
        <div id="wrapper" style={{background: "#F0F1DF"}}>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px", marginBottom: "5%"}}> Vacinação de Bovinos</h1>
            
            <div className="container" style={{background: "#F0F1DF"}}>
            
                <div className="img">
                    <img src={imgVaca} className="telaVaca"/>
                </div>
                
                <div className="formulario">
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "15em", margin: "20px"}} onClick={e => navigate('/listarvacinas')}>Vacinas</button></div>
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "15em", margin: "20px"}} onClick={e => navigate('/listaFabricante')}>Fabricantes de vacinas</button></div>
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "15em", margin: "20px"}} onClick={e => navigate('/listaanimaiscarteiravacinacao')}>Bovinos</button></div>
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "15em", margin: "20px"}} onClick={e => navigate('/listapessoa')}>Usuários</button> </div>
                </div>

            </div>

            <Footer/>
        </div>
    );
};

export default Inicio;
