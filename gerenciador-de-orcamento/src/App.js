import './App.css';
import Condicional from './components/Condicional';
/*import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';*/
import Evento from './components/Evento';
import Form from './components/Form'
import Lista from './components/Lista';


function App() {
  const meusItens = ['React', 'Vue', 'Angular']
  const empty = []
  return (
    <div className="App">
      <h1>Renderizando Lista</h1>
      <Lista itens={meusItens}/>
      <Lista itens={empty}/>
    </div>
  );
}

export default App;
