import styles from './Evento.module.css';
import Button from './evento/Button';

function Evento({numero}) {
    function EventoClick(){
        console.log(`Evento disparado`);
    }

    function segundoEvento() {
        console.log('Disparado segundo evento')
    }
    return(
        <div>
            <p >Clique para disparar um evento</p>
            <Button event={EventoClick} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento;