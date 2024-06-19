import "./alunos.css"

import { useState } from "react";

const Aluno = () => {

  const [nome,setNome] = useState('');
  const [genero,setGenero] = useState('');
  const [serie,setSerie] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [generoError, setGeneroError] = useState('');
  const [serieError, setSerieError] = useState('');
  const [alunos, setAlunos] = useState([]);
 

  const handleForm = (e) => {
    e.preventDefault();
    let valid = true;

    if (nome === "") {
      setNomeError('*Nome Obrigatório');
      valid = false;
    } else {
      setNomeError('');
    }

    if (genero === "" || genero === "Selecione o Gênero") {
      setGeneroError("*Gênero Obrigatório");
      valid = false;
    } else {
      setGeneroError('');
    }

    if (serie === "") {
      setSerieError("*Série Obrigatória");
      valid = false;
    } else {
      setSerieError('');
    }
    if (valid) {
      const newAluno = { id: alunos.length + 1, nome, genero, serie };
      setAlunos([...alunos, newAluno]);
    
      setNome('');
      setGenero('');
      setSerie('');
    }
  };
    

  const deleteAluno = (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este aluno?");
    if (confirmDelete) {
      setAlunos(alunos.filter(aluno => aluno.id !== id));
    }
  };
  
  


    return (
      <>
        <div className="card">
          <div className="card-header">
            <h2>Alunos</h2>
          </div>
          <div className="card-body">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" value={nome} onChange={ e => setNome(e.target.value) } className="form-control" />
                    {!nome && <div className="text-danger text-sm">{nomeError}</div>}
                  </div>
  
                  <div className="col-2">
                    {" "}
                    <label htmlFor="genero">Genero</label>
                    <select className="form-control" id="genero"
                    onChange={e=> setGenero(e.target.value)}
                    > <option value="x"  selected>Selecione o Gênero</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </select>
                    {!genero && <div className="text-danger text-sm">{generoError}</div>}
                  </div>
  
                  <div className="col-2">
                    <label htmlFor="serie">Série</label>
                    <input type="text" id="serie" className="form-control" value={serie} 
                    onChange={e => setSerie(e.target.value)} />
                    {!serie && <div className="text-danger text-sm">{serieError}</div>}
                  </div>
  
                  <div className="row mt-3">
                    <div className="col">
                      <button onClick={handleForm} className="btn btn-outline-success btn-form">
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
              {alunos.map(aluno => (
                <tr key={aluno.id}>
                  <td className="text-center">{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.genero}</td>
                  <td>{aluno.serie}</td>
                  <td className="text-center btn-table">
                    <button className="btn btn-outline-warning">Editar</button>
                   <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteAluno(aluno.id)}
                    >Deletar </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  
  export default Aluno;
  