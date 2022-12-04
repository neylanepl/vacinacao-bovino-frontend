import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

import '../../styles/css/inicio.css';


const Inicio = () => {

    const navigate = useNavigate();

    return(
        <div id="wrapper">
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px", marginBottom: "5%"}}> Página Inicial</h1>
            
                <div className="text-center" style={{}}>        
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "40%", margin: "20px"}} onClick={e => navigate('/listarvacinas')}>Vacinas</button></div>
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "40%", margin: "20px"}} onClick={e => navigate('/')}>Fabricantes de vacinas</button></div>
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "40%", margin: "20px"}} onClick={e => navigate('/listaanimaiscarteiravacinacao')}>Bovinos</button></div>
                    <div><button variant="warning"  type="submit" value="submit" className="btn" style={{backgroundColor:"#83A93A", borderColor: "#6D3B00", width: "40%", margin: "20px"}} onClick={e => navigate('/')}>Usuários</button> </div>
               
            </div>
            <Footer/>
        </div>
    );
};

export default Inicio;
