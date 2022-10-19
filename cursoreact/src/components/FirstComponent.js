import OutroComponente from "./OutroComponente";


function FIRSTCOMPONENT() {
    const Name="leandro Dias Ivanaszko"
    // Comentarios fora de JSX
  return (
    <div className='Primeiro App'>
        {/* Comentarios no JSX */}
        <p> Primeiro Componente</p>
        {2 + 2}
        <p>Nome: {Name}</p>
        <OutroComponente /> 
    </div>
  )
}

export default FIRSTCOMPONENT;
