import React from 'react';

import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav';

const ListaPessoa = () => {

    const navigate = useNavigate();

    return(
        <div>
            <Nav/>
            <h1 className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}>Usuários cadastrados no sistema</h1>
            <div className="t" style={{margin: "5%", marginLeft: "20%", marginRight: "20%"}}>
                <div className="text-center" style={{marginBottom: "5%"}}><button  className="btn btn-success" style={{backgroundColor:"#83A93A",borderColor: "#6D3B00"}} variant="warning"  onClick={e => navigate('/cadastrarPessoa')}>Cadastrar Usuário</button></div>
                
                <table className="table table-bordered table-bordered" >
                    <thead className="text-center" style={{backgroundColor:"#E0E7CA"}}>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Cep</th>
                        <th scope="col">Rua</th>
                        <th scope="col">Número</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                    <tbody className="text-center">
                        <tr>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>
                            <td scope="row" text=""></td>

                            <td style={{display: "flex", justifyContent: "space-evenly"}}>

                                <button className="btn btn-primary" style={{color: "white", textDecoration: "none"}} variant="warning"  onClick={e => navigate('/editarpessoa')}>
                                        Editar
                                        <span className="editar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color='white' viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        </span>
                                </button>

                                <button className="btn btn-danger"
                                    style={{color: "white", textDecoration: "none"}} variant="warning"  onClick={e => navigate('/')}>
                                        Deletar 
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color='white' viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                            </svg>
                                        </span>
                                </button>
                            </td>

                        </tr>
                        
                    </tbody>

                </table>

            </div>
        </div>
    );

}


export default ListaPessoa;