//Importação de métodos
import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "../../Services/Api";

//Importação de componentes
import Pagination from "../Pagination/Pagination";
import styles from "./PokemonList.module.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import Searchbar from "../Searchbar/Searchbar";
import { Loader } from "../Loading/Loading";

function PokemonList() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  const itensPerPage = 25;

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    }
    fetchPokemons();
  }, [page, itensPerPage]);

  function onPreviousClickHandler() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function onNextClickHandler() {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  }

  const renderPokemonsList = () => {
    const pokemonsList = [];
    pokemons.forEach((pokemon) => {
      if (!pokemon.name.includes(query)) {
        return;
      }
      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });
    return pokemonsList;
  };

  return (
    <>
      <Searchbar onSearch={(q) => setQuery(q)} />
      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onPreviousClick={onPreviousClickHandler}
        onNextClick={onNextClickHandler}
      />

      {loading ? (
        <Loader />
      ) : renderPokemonsList().length === 0 ? (
        <div>meteu essa?</div>
      ) : (
        <div className={styles.pokemon_list_grid}>{renderPokemonsList()}</div>
      )}
    </>
  );
}

export default PokemonList;
