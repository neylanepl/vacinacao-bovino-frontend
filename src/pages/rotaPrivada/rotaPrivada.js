import React from 'react';

import { isAuthenticated } from '../../scripts/authencation';
import { Navigate } from 'react-router-dom';

const RotaPrivada = ({children}) => {
    if(isAuthenticated()) {
        return(children);
    }
    return(<Navigate to="/login" />);
}

export default RotaPrivada;


