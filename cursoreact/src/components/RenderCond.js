const RenderCond = ({ j, y }) => {
    const x = 6;
    return (
        <div>
            <p>Numero passado: {j}</p>
            {j > 5 && <p> X é maior que 5</p>}
            {j > 5 ? <p> X é maior que 5</p> : <p> X é menor que 5</p>}
            <p>Numero passado para y: {y}</p>
        </div>
    )
}

export default RenderCond;