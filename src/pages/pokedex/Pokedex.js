//Importação de componentes
import Navbar from "../../components/Navbar/Navbar";
import PokemonList from "../../components/PokemonList/PokemonList";

import styles from "./Pokedex.module.css";


function Pokedex() {

  return (
    <div className={styles.pokedex_container}>
      <Navbar />
      <div>
        <PokemonList />
      </div>
    </div>
    
  );
}

export default Pokedex;
