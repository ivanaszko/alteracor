import Button from './evento/Button'
const Evento = () =>{
    function meuEvento(){
        console.log("Priemiro evento");
    }
    function segundoEvento(){
        console.log("Segundo evento");
    }
    return(
        <div>
            <p> Clique para disparar o evento </p>
            <Button event={meuEvento}text="primeiro evento" />
            <Button event={segundoEvento}text="Segundo Evento evento" />
            
        </div>    
    )    
}

export default Evento;