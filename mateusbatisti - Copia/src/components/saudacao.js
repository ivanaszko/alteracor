const Saudacao = ({nome}) => {
    function geraSaudacao(algumNome){
        return `OlÁ ${algumNome}, tudo bem com você?`;
    }
    return (
        <>
            
                {nome && <p>{geraSaudacao(nome)}</p>}
            
        </>
    )
}

export default Saudacao