import React from 'react';
import { useNavigate } from 'react-router-dom';

import { isAuthenticated, logout } from '../scripts/authencation';

const Nav = () => {
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    };

    return(
            <div  className="d-flex flex-wrap py-3 " style={{background: "#83A93A"}}>
                {isAuthenticated() 
                    ? <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                        <button className="botaoVoltar"  
                            style={{marginRight: "10%"}}
                            onClick={e => navigate('/')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                            </svg>
                        </button> 
                        <button className="botaoVoltar"
                            onClick={e => handleLogOut(e)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    : <div/>
                }
                
            </div>
    );
}

export default Nav;


