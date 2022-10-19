import {useState} from 'react'

function Condicional() {
    const [email, setEmail] = useState()



    function enviarEmail(e) {
        e.preventDefault()
        console.log("Ok")
    }


    function limparEmail() {
        setEmail('')
    }

    return(
        <div>
            <form>
                <input type="email" placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar E-mail</button>
         
            </form>
            {email && (
                <div>
                    <p>O email do usuário é {email}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
           )}
        </div>

        
    )
}

export default Condicional;