import "./styles.css";
import { Link } from "react-router-dom";

import PokemonComponent from "../../components/Pokemon/Pokemon";
import { NavBarStyles, BackContainer } from "./navbar";

function Pokemon() {
  return (
    <div className="header_container">

      <NavBarStyles className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <BackContainer>
          <Link to="/">
            <h2>
              <i className="arrow circle left icon" />
            </h2>
          </Link>
        </BackContainer>
      </NavBarStyles>

      <div id = "container_fluid ">
        <PokemonComponent />
      </div>
    </div>
  );
}

export default Pokemon;
