import './App.css';
/*import Condicional from './components/Condicional';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form'
import Lista from './components/Lista';*/
import SeuNome from './components/SeuNome';
import {useState} from 'react'
import Saudacao from './components/Saudacao';


function App() {
  const [nome, setNome] = useState()
  return (
    <div className="App">
      <h1>State Lift</h1>
      <p>Digite seu nome</p>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
