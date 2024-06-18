import "./alunos.css"

import { useState } from "react";

const Aluno = () => {

  const [nome,setNome] = useState('');
  const [genero,setGenero] = useState('');
  const [serie,setSerie] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [generoError, setGeneroError] = useState('');
  const [serieError, setSerieError] = useState('');

  const handleForm = (e) => {
    e.preventDefault();

    if (nome === "") {
      setNomeError('*Nome Obrigatório')
    } else if (genero === "" || genero === "Selecione o Gênero") {
      setGeneroError("*Gênero Obrigatório")
    } else if (serie === ""){
      setSerieError("*Série Obrigatória")
    } else {
      setNomeError('')
      setGeneroError('')
      setSerieError('')
    } 
    
  }
  

    return (
      <>
        <div className="card">
          <div className="card-header">
            <h2>Alunos</h2>
          </div>
          <div className="card-body">
            <div className="container">
              <form onSubmit={handleForm}>
                <div className="row">
                  <div className="col">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" value={nome} onChange={ e => setNome(e.target.value) } className="form-control" />
                    {!nome && <div className="text-danger">{nomeError}</div>}
                  </div>
  
                  <div className="col-2">
                    {" "}
                    <label htmlFor="genero">Genero</label>
                    <select className="form-control" id="genero" value={genero}
                    onChange={e=> setGenero(e.target.value)}
                    > <option value="x"  selected>Selecione o Gênero</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </select>
                    {!genero && <div className="text-danger">{generoError}</div>}
                  </div>
  
                  <div className="col-2">
                    <label htmlFor="serie">Série</label>
                    <input type="text" id="serie" className="form-control" value={serie} 
                    onChange={e => setSerie(e.target.value)} />
                    {!serie && <div className="text-danger">{serieError}</div>}
                  </div>
  
                  <div className="row mt-3">
                    <div className="col">
                      <button type="submit" className="btn btn-outline-success btn-form">
                        Adicionar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <table className="table table-striped table-bordered mt-3    ">
              <thead>
                <tr>
                  <th width="100" className="text-center">Código</th>
                  <th>Nome</th>
                  <th  width="100" >Gênero</th>
                  <th  width="100" >Série</th>
                  <th width="200" className="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td  className="text-center">01</td>
                  <td>Carlos Eduardo</td>
                  <td>Masculino</td>
                  <td>6ªB</td>
                  <td className="text-center btn-table">
                    <button  className="btn btn-outline-warning">Editar</button>
                    <button className="btn btn-outline-danger">Apagar</button>
                  </td>
                </tr>
                <tr>
                  <td  className="text-center">02</td>
                  <td>Daniel Souza</td>
                  <td>Masculino</td>
                  <td>5ªA</td>
                  <td className="text-center btn-table">
                    <button className="btn btn-outline-warning">Editar</button>
                    <button className="btn btn-outline-danger">Apagar</button>
                  </td>
                </tr>
                <tr>
                  <td  className="text-center">03</td>
                  <td>Karina Silva</td>
                  <td>Feminino</td>
                  <td>7ªA</td>
                  <td className="text-center btn-table">
                    <button className="btn btn-outline-warning">Editar</button>
                    <button className="btn btn-outline-danger">Apagar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  
  export default Aluno;
  