import {useState} from 'react'
const Condicional = () =>{

    const [email,setEmail] = useState();
    const [userEmail,setUserEmail] = useState();

    function limparEmail(){
        setUserEmail('')    

    }
    function enviaEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(email)
        setEmail('')
    }

    return(
        <div>
            <form>
                <label htmlfrom='email'>E-mail: </label>
                <input type='text' 
                    name='email' 
                    id='email'  
                    placeholder="Digite seu E-mail..." 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                <button type='submit' onClick={enviaEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;