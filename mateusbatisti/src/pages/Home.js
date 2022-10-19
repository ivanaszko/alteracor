

const Home = () =>{
    
    function criaLinhas(linha) {
        return (<li key={linha}> Numero: {linha} </li>)
    }
    function listinha() {
        let rows = []
        for (let i = 0; i < 20; i++) {
          rows.push(i)
        }
    return rows
    }
    
    return(
        
        <div>
            <h1>Home</h1>
            <p>Conteudo da Paginas</p>
            {listinha().map((row) => criaLinhas(row))}            
        </div>
    )
}

export default Home;