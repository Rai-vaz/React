import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './Pages/Home'
import Empresa from './Pages/Empresa'
import Contato from './Pages/Contato'
import NavBar from "./components/NavBar";


function App() {
  
  return ( 
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </Router>
  );
}

export default App;
