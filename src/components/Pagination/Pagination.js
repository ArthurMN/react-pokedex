import styles from "./Pagination.module.css"

function Pagination({page, totalPages, onPreviousClick, onNextClick}){

    return (
        <div className={styles.pagination_container}>
            <button onClick={onPreviousClick}> <div> ◀ </div> </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onNextClick}> <div> ▶ </div> </button>
        </div>
    )
}

export default Pagination