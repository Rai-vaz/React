import styles from './Frase.module.css';

function Frase() {
    return(
        <div className={styles.FraseContainer}>
            <p className={styles.FraseContent}>Meu componente com frase</p>
        </div>
    )
}

export default Frase;