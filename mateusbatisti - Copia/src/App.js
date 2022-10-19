import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';


function App() {
  
  return (
    <div className="App">
      <Router>
        <p className='tituloapp'>Routes</p>
        {/*<NavBar />*/}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Empresa" element={<Empresa/>}/>
          <Route exact path="/Contato" element={<Contato/>}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
