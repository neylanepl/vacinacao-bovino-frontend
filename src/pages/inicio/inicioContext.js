import React from 'react';
import { useNavigate } from 'react-router-dom';

import Inicio from './inicio';
import Login from '../pessoa/login';

import { isAuthenticated } from '../../scripts/authencation';

const InicioContext = () => {
    const navigate = useNavigate();

    const changePage = () => {
        navigate('/login', {replace: true})
    };

    return(
        <Inicio/>
    );
}

export default InicioContext;
