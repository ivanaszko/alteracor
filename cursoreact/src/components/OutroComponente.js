const handleClick = () => {

    console.log("Clicou afu!")

}


const OutroComponente = () => {
    return (
        <div>
            <p>Segundo Componente</p>
            <p><button onClick={handleClick}> Evento de clique </button></p>
            <p><button onClick={() => console.log("clicou sim")}> Evento de clique 2</button></p>

        </div>
    )
}

export default OutroComponente;