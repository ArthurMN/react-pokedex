import loading from "../../assets/loader.gif"
import styles from "./Loading.module.css"

export function Loader(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" loading="lazy"/>
        </div>
    )
}

export function MiniLoader(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.mini_loader} src={loading} alt="Loading" loading="lazy"/>
        </div>
    )
}

