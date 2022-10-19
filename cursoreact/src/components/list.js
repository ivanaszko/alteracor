const List = () => {
    const itens =[
        {
            id: 1,
            Name:"Matheus"
        },
        {
            id: 2,
            Name:"João"
        },
        {
            id: 3,
            Name:"Leandro"
        }
    ];
    return (
        <div>
            {itens.map((itens) => (
                <p key={itens.id}>
                    {itens.Name}
                </p>
            ))}
        </div>
    )
}

export default List;