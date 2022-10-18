import styles from './Evento.module.css'

function Evento({numero}) {
    function EventoClick(){
        console.log(`Opa clicou e número é ${numero}`);
    }
    return(
        <div>
            <p >Clique para disparar um evento</p>
            <button className={styles.Buttom_Click} onClick={EventoClick}>Ativar</button>
        </div>
    )
}

export default Evento;