import React from 'react';

import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const CarteiraVacinacao = () => {
    const navigate = useNavigate();

    function createData(vacina, dose, data) {
        return { vacina, dose, data };
      }
      
    const rows = [
        createData('Coronavac', "1°", "20/02/2022"),
        createData('Pfizer', "2°", "20/02/2022"),
        createData('Jenssen', "3°", "20/02/2022"),
    ];

    return(
        <div>
            <Nav/>
            <p className="fs-1 text-center" style={{background: "#E0E7CA", padding: "20px"}}>Carteira de Vacinação</p>
        
            <div className="guardaBotao">
                    <button type="submit" className="botao" style={{backgroundColor:"#83A93A",borderColor: "#6D3B00"}} variant="warning"  onClick={e => navigate('/cadastraraplicacao')}>
                        Cadastrar aplicação de vacina
                    </button>
            </div>

            <div style={{margin: "5%"}}>

                <div style={{marginLeft: "20%", marginRight: "20%", background: "#E0E7CA"}} >
                    <table className="table table-borderless" >
                        <tbody className="text-center">
                            <tr>
                                <td>
                                    ID: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.id}"></span>
                                </td>  
                                <td>
                                    Peso: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.peso}"></span>
                                    kg
                                </td> 
                                <td>
                                    Data de nascimento: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.aniversario}"></span>
                                </td>
                                <td>
                                    Chifre: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.chifre}"></span>
                                </td>  
                            </tr>
                            <tr>
                                <td>
                                    Nome: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.nome}"></span>
                                </td> 
                                <td>
                                    Sexo: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.sexo}"></span>
                                </td>   
                                <td>
                                    Cor: 
                                    <span text="${carteira.isEmpty()} ? 'none' : ${carteira.get().bovino.cor}"></span>
                                </td>  
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{marginLeft: "20%", marginRight: "20%", marginBottom: "10%"}}>
                    <div className="text-center" style={{background: "#E0E7CA", padding: "1%"}}><strong>Carteira de Vacinação</strong></div>
                    <table className="table table-bordered table-bordered" >
                        <tbody>
                            <tr>
                                <th>Vacina</th>
                                <th>Dose</th>
                                <th>Data</th>
                            </tr>
                            {rows.map((row) => (
                                <tr key={row.vacina} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <td component="th" scope="row">
                                        {row.vacina}
                                    </td>
                                    <td align="right">{row.dose}</td>
                                    <td align="right">{row.data}</td>
                                </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CarteiraVacinacao;

