//Estilos
import styles from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


//Componentes
import Pokedex from "./pages/pokedex/Pokedex";
import Pokemon from "./pages/pokemon/Pokemon";

//Métodos
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div style={{ backgroundColor: "#fff" }}>
            <Routes>
              <Route exact path="/" element={<Pokedex />}/>
              <Route path="/pokedex" element={<Pokedex />}/>
              <Route path="/pokemon/:id" element ={<Pokemon />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
