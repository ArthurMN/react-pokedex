import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function onChangeHandler(e) {
    setSearch(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <section className={styles.search}>
      <form>
        <input
          placeholder="Buscar pokémon"
          type="text"
          value={search}
          onChange={onChangeHandler}
        />
      </form>
    </section>
  );
}

export default Searchbar;
