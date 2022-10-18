import Item from "./Item";

function List() {
    return(
        <>
           <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Renault"/>
                <Item marca='Fiat'/>
                <Item marca='Chevrolet' ano_lancamento={2000}/>
                <Item/>
            </ul>
        </>
    )
}
export default List;