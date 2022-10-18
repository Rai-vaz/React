import {useState} from 'react'; 
function Form() {
    function cadastrar(e) {
        e.preventDefault()/*executa o que estiver apos ele e depois libera comportamento padrão do html */
        console.log(`Usuário acessou com o nome ${ValorNome} e a senha ${ValorPass}`)
        console.log("cadastrado")
    }

    const[ValorNome, setValorNome] = useState('Nome padrão');
    const[ValorPass, setValorPass] = useState();
   

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id='name' name='name' type='text' placeholder='Digite seu nome' value={ValorNome} onChange={(e) => setValorNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="pass">Senha</label>
                    <input id='pass' name='pass' type='password' placeholder='Digite sua senha' onChange={(e) => setValorPass(e.target.value)}/>
                </div>
                <div>
                    <input type='submit' value='Cadastrar'/>
                </div>
            </form>
        </div>
    )
}

export default Form;