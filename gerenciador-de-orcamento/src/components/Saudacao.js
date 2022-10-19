function Saudacao({nome}) {
    function MostrarNome(params) {
        return(
            <>
                <p>Olá {params} Bem-vindo</p>
            </>
        )
    }

    return(
        <>
            {nome && MostrarNome(nome)}
        </>
    )
}

export default Saudacao