import styles from "./Navbar.module.css";


function Navbar() {
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"


  return (
    <nav className={styles.navbar}>
      <div>
        <img
          alt="pokeapi-logo"
          src={logoImg}
        />
      </div>
    </nav>
  );
}

export default Navbar;
