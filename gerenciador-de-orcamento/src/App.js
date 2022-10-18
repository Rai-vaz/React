import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = "Raí vaz";
  const Newname = name.toLowerCase();
  const url = 'https://via.placeholder.com/150'

  function soma(a, b) {
    return a + b;
  }

  
  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Seja bem vindo senhor {Newname}</p>
      <p>Soma {soma(3,7)}</p>
      <img src={url} alt="Minha imagem dinamica" />
      <HelloWorld/>
      
    </div>
  );
}

export default App;
