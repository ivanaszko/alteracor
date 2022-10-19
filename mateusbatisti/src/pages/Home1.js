
import styles from './Home.module.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import Empresa from './Empresa';
import Contato from './Contato';
import NotFound from './NotFound';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import NavBar from '../Layout/NavBar'


const Home1 = () =>{
     
   
    return(
        <>
            <Header />
            <Router>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <NavBar />
                    </div>

                        <div className={styles.conteudo} >
                        <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route exact path="/Empresa" element={<Empresa/>}/>
                                <Route exact path="/Contato" element={<Contato/>}/>
                                <Route path="/*" element={<NotFound />}/>
                            </Routes>
                        </div>

                </div>
            </Router>
            <Footer />
        </>
     )
}

export default Home1;