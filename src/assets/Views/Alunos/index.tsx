const Aluno = () => {
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
                    <input type="text" id="nome" className="form-control" />
                  </div>
  
                  <div className="col-2">
                    {" "}
                    <label htmlFor="genero">Genero</label>
                    <select className="form-control" id="genero">
                      <option>Masculino</option>
                      <option>Feminino</option>
                    </select>
                  </div>
  
                  <div className="col-2">
                    <label htmlFor="serie">Série</label>
                    <input type="text" id="serie" className="form-control" />
                  </div>
  
                  <div className="row mt-3">
                    <div className="col">
                      <button className="btn btn-outline-success">
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
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Gênero</th>
                  <th>Série</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Carlos Eduardo</td>
                  <td>Masculino</td>
                  <td>6ªB</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Daniel Souza</td>
                  <td>Masculino</td>
                  <td>5ªA</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Karina Silva</td>
                  <td>Feminino</td>
                  <td>7ªA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  
  export default Aluno;
  