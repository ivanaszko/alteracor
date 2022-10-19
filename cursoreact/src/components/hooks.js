import {useState, useEffect} from "react";

const Hooks = () => {
    let idade = 5;
    const [novaIdade, setNovaIdade] = useState(40);
    const Mudaidade = () =>{
        console.log("teste " & idade);
        return(
            idade = 31
            
        )
    }

    useEffect(() =>{
        console.log(idade);
    });

    return (
        <div>
            <p> Idade: {idade}</p>
            <button onClick={() => Mudaidade()}> Muda idade </button>

            <p> Nova idade: {novaIdade}</p>
            <button onClick={() => setNovaIdade(novaIdade + 1 )}> Muda Nova idade </button>
        </div>
    )
}

export default Hooks;