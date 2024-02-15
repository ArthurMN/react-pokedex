import "./styles.css";
import { Badge } from "./PokemonStyles";

import { Loader } from "../Loading/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  searchPokemon,
} from "../../Services/Api";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function loadPokemonData() {
      const data = await searchPokemon(id);
      const { name, types, weight, height, sprites, stats, abilities } = data;
      setPokemon({
        name: name.replace(/-/g, " "),
        types: types.map(
          (typeInfo) =>
            typeInfo.type.name[0].toUpperCase() + typeInfo.type.name.slice(1)
        ),
        abilities: abilities,
        id: id,
        weight: weight / 10,
        height: height / 10,
        spriteImageUrl: sprites.front_default,
        shinySpriteImageUrl: sprites.front_shiny,
        baseStats: [
          stats[0].base_stat,
          stats[1].base_stat,
          stats[2].base_stat,
          stats[3].base_stat,
          stats[4].base_stat,
          stats[5].base_stat,
        ],

        evs: stats
          .filter((stat) => {
            if (stat.effort > 0) {
              return true;
            }
            return false;
          })
          .map((stat) => {
            return `${stat.effort} ${stat.stat.name
              .toLowerCase()
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}`;
          })
          .join(", "),
      });

      setPokemonImage(sprites.other.dream_world.front_default);
      setIsLoading(false);
    }

    loadPokemonData();
  }, [id, pokemon.id]);

  const baseStatsName = [
    "HP",
    "Attack",
    "Defense",
    "Sp. Attack",
    "Sp. Defense",
    "Speed",
  ];

  return isLoading ? (
    <Loader />
  ) : (
    <div className="col-12 fadeIn">
      <h1 className="text-center text-uppercase Section-Heading">
        {pokemon.name}
      </h1>

      <div
        className="row justify-content-center"
        style={{ position: "relative", paddingBottom: "1rem" }}
      >
        <div className="col-lg-3 col-md-2 bioDiv d-flex flex-wrap justify-content-center">
          <div className="inner">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="text-right font-weight-bold">ID</td>
                  <td># {pokemon.id}</td>
                </tr>
                <tr>
                  <td className="text-right font-weight-bold">Height</td>
                  <td style={{ whiteSpace: "nowrap" }}>{pokemon.height} Mt</td>
                </tr>
                <tr>
                  <td className="text-right font-weight-bold">Weight</td>
                  <td style={{ whiteSpace: "nowrap" }}>{pokemon.weight} Kg</td>
                </tr>
                <tr>
                  <td className="text-right font-weight-bold">Abilities</td>
                  <td>
                    <span className="abilities">
                      {pokemon.abilities.map((ability, index) => (
                        <Badge
                          key={index}
                          className={`ability ${pokemon.types[0]} text-uppercase`}
                          role="button"
                          style={{
                            whiteSpace: "nowrap",
                            display: "inline-block",
                            boxShadow: "none",
                          }}
                        >
                          {ability.ability.name}
                        </Badge>
                      ))}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-right font-weight-bold"
                    style={{ verticalAlign: "middle" }}
                  >
                    Type
                  </td>
                  <td>
                    <div className="row" style={{ flexWrap: "nowrap" }}>
                      {pokemon.types.map((type, index) => (
                        <Badge
                          key={index}
                          className={`icon ${type} text-capitalize`}
                        >
                          <span className="text-white font-weight-bold">
                            {type}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-5 d-flex flex-wrap align-items-center">
          <div className="image-container">
            <img
              alt=""
              className="Image img-fluid mx-auto my-auto d-block fadeInOut"
              src={pokemonImage}
              style={{
                zIndex: "100 !important",
                maxWidth: "100%",
                height: "auto",
                paddingTop: "120px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-2 statDiv my-auto mx-auto d-flex flex-wrap justify-content-center">
          <div className="inner">
            <table className="table table-borderless">
              <tbody>
                {pokemon.baseStats.map((stat, index) => (
                  <tr key={index}>
                    <td
                      className="text-right font-weight-bold"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {baseStatsName[index]}
                    </td>
                    <td colSpan={3} style={{ width: "100%" }}>
                      <div className="progress">
                        <Badge
                          className={`progress-bar progress-bar-striped progress-bar-animated rounded-sm ${pokemon.types[0]}`}
                          role="progressbar"
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="255"
                          style={{
                            width: `${stat}%`,
                          }}
                        >
                          <span>{stat}</span>
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
