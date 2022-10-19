function Lista({itens}) {
    return(
       <>
            <h3>Minha lista de coisas boas</h3>
            {
                
                itens.length > 0 ? (
                    itens.map((itens, index) => (
                    <p key={index}>{itens}</p>
                ))

                ) : (
                    <h2>Essa lista está vazia</h2>
                )
    
            }
       </>
    )
}

export default Lista