
import './App.css'
import Aluno from './assets/Views/Alunos'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <div className="container mt-4">
    <ToastContainer/>
    <Aluno/>
   
     </div>
    </>
  )
}

export default App
