import "./alunos.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

const Aluno = () => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [serie, setSerie] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [generoError, setGeneroError] = useState("");
  const [serieError, setSerieError] = useState("");
  const [alunos, setAlunos] = useState([]);
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingNome, setEditingNome] = useState("");
  const [editingGenero, setEditingGenero] = useState("");
  const [editingSerie, setEditingSerie] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/alunos/listar")
      .then(function (response) {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    let valid = true;

    if (nome === "") {
      setNomeError("*Nome Obrigatório");
      valid = false;
    } else {
      setNomeError("");
    }

    if (genero === "" || genero === "Selecione o Gênero") {
      setGeneroError("*Gênero Obrigatório");
      valid = false;
    } else {
      setGeneroError("");
    }

    if (serie === "") {
      setSerieError("*Série Obrigatória");
      valid = false;
    } else {
      setSerieError("");
    }

    if (valid) {
      const newAluno = { nome, genero, serie };

      axios
        .post("http://localhost:8080/api/alunos/cadastrar", newAluno)
        .then(function (response) {
          console.log(response.data);
          setStudents([...students, response.data]); // Adiciona o novo aluno na lista
          toast("Novo aluno cadastrado.");
          setNome("");
          setGenero("");
          setSerie("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const deleteAluno = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar este aluno?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8080/api/alunos/${id}`)
        .then(function (response) {
          console.log(response.data);
          setStudents(students.filter((student) => student.id !== id));
          toast(`Aluno deletado com sucesso.`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const editAluno = (id) => {
    const aluno = students.find((student) => student.id === id);
    if (aluno) {
      setEditingId(aluno.id);
      setEditingNome(aluno.nome);
      setEditingGenero(aluno.genero);
      setEditingSerie(aluno.serie);
    }
  };

  const updateAluno = (e) => {
    e.preventDefault();
    const updatedAluno = {
      id: editingId,
      nome: editingNome,
      genero: editingGenero,
      serie: editingSerie,
    };

    axios
      .put(`http://localhost:8080/api/alunos`, updatedAluno)
      .then(function (response) {
        console.log(response.data);
        // Atualizar a lista de alunos
        const updatedStudents = students.map((student) => {
          if (student.id === updatedAluno.id) {
            return { ...student, ...updatedAluno };
          }
          return student;
        });
        setStudents(updatedStudents);
        toast(`Aluno ${updatedAluno.nome} atualizado com sucesso.`);
        // Limpar o estado de edição
        setEditingId(null);
        setEditingNome("");
        setEditingGenero("");
        setEditingSerie("");
      })
      .catch(function (error) {
        console.log(error);
      });
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
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="form-control"
                  />
                  {!nome && (
                    <div className="text-danger text-sm">{nomeError}</div>
                  )}
                </div>

                <div className="col-2">
                  {" "}
                  <label htmlFor="genero">Genero</label>
                  <select
                    className="form-control"
                    id="genero"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                  >
                    <option value="x">Selecione o Gênero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  {!genero && (
                    <div className="text-danger text-sm">{generoError}</div>
                  )}
                </div>

                <div className="col-2">
                  <label htmlFor="serie">Série</label>
                  <input
                    type="text"
                    id="serie"
                    className="form-control"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                  />
                  {!serie && (
                    <div className="text-danger text-sm">{serieError}</div>
                  )}
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <button
                      onClick={handleForm}
                      className="btn btn-outline-success btn-form"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <table className="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th width="100" className="text-center">
                  Código
                </th>
                <th>Nome</th>
                <th width="100">Gênero</th>
                <th width="100">Série</th>
                <th width="200" className="text-center">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {students.sort((a, b) => a.id - b.id).map((student) => (
                <tr key={student.id}>
                  <td className="text-center">{student.id}</td>
                  <td>{student.nome}</td>
                  <td>{student.genero === "f" ? "Feminino" : "Masculino"}</td>
                  <td>{student.serie}</td>
                  <td className="text-center btn-table">
                    {editingId === student.id ? (
                      <form onSubmit={updateAluno}>
                        <input
                          type="text"
                          value={editingNome}
                          onChange={(e) => setEditingNome(e.target.value)}
                        />
                        <select
                          value={editingGenero}
                          onChange={(e) => setEditingGenero(e.target.value)}
                        >
                          <option value="Masculino">Masculino</option>
                          <option value="Feminino">Feminino</option>
                        </select>
                        <input
                          type="text"
                          value={editingSerie}
                          onChange={(e) => setEditingSerie(e.target.value)}
                        />
                        <button type="submit">Salvar</button>
                      </form>
                    ) : (
                      <>
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => editAluno(student.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => deleteAluno(student.id)}
                        >
                          Deletar
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Aluno;
