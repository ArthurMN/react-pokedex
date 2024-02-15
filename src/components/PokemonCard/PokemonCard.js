import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";


function PokemonCard({ pokemon }) {
  
  const pokemonType = pokemon.types.map(
    (type) => type.type.name[0] + type.type.name.slice(1)
  );


  return (
      <Link className={styles.styled_link} to={`pokemon/${pokemon.id}`}>
        <div className={styles.pokemon_card}>
          <div className={styles.pokemon_image_container}>
            <img alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} />
          </div>
          <div className={styles.pokemon_card_body}>
            <div className={styles.pokemon_card_top}>
              <h1>{pokemon.name}</h1>
              <div className={styles.card_id}>
                <span>#{pokemon.id}</span>
              </div>
            </div>
            <div className={styles.pokemon_card_bottom}>
              <div className={styles.pokemon_type}>
                <div key={pokemonType.index} className={styles.pokemon_type_text}>
                  {pokemonType.join(" / ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default PokemonCard;
