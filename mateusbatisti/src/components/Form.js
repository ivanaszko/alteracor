import {useState} from 'react'
const Form = () => {

    

    function cadastrarUsuario(e){
        e.preventDefault()

        console.log(`usuario: ${name} cadastrado com a senha ${password}`)
    }

    const [name,setname] = useState('null');
    const [password,setpassword] = useState('null');

    return(
    <div>
        <form onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="name"></label>
            <input type='text' 
                id='name' 
                name='name' 
                placeholder='Digite seu nome'
                onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password"></label>
            <input type='password'
                id='password' 
                name='password' 
                placeholder='Digite sua senha'
                onChange={(e) => setpassword(e.target.value)} 
            />
        </div>
        <div>
            
            <input type='submit' value='cadastrar' />
        </div>
        </form>
    </div>
    )

}

export default Form