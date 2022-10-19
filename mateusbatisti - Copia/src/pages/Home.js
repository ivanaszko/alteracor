//import styles from './Home.module.css'
import styles from './Home.module.css'
import NavBar from '../Layout/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Empresa from '../pages/Empresa';
import Contato from '../pages/Contato';
import NotFound from '../pages/NotFound';
import Footer from '../Layout/Footer';
const Home = () =>{
     
    function criaLinhas(linha) {
        return (<li> Numero: {linha} </li>)
    }
    function listinha() {
        let rows = []
        for (let i = 0; i < 20; i++) {
          rows.push(i)
        }
    return rows
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <NavBar />
            </div>
            <div className={styles.conteudo}>
            <Router>
        <p className='tituloapp'>Routes</p>
        {/*<NavBar />*/}
        <Routes>
          
          <Route exact path="/Empresa" element={<Empresa/>}/>
          <Route exact path="/Contato" element={<Contato/>}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </Router>
            </div>
        </div>
     )
}

export default Home;