import {Link} from "react-router-dom";
import styles from '../Pages/Botao.module.css'

function NavBar() {
    return(
        <div>
            <ul>
                <li className={styles.Botao}>
                    <Link className={styles.Link} to='/'>Home</Link>
                </li>
                <li className={styles.Botao}>
                    <Link className={styles.Link} exact to='/empresa'>Empresa</Link>
                </li>
                <li className={styles.Botao}>
                    <Link className={styles.Link} exact to='/contato'>Contato</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default NavBar