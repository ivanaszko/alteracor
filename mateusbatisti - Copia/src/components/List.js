import Item from './Item'
const List = () =>{
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985} />
                <Item marca='VW' ano_lancamento={1985}   />
                <Item marca='Fiat' ano_lancamento={1985}   />
                <Item marca='Ford' ano_lancamento={1985}   />
                <Item marca='Jac' ano_lancamento={1985}   />
                <Item marca='Fiat' ano_lancamento={1985}   />
                <Item />
            </ul>
        </>
    )
}

export default List;