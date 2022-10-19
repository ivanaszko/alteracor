import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home1 from './pages/Home1';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';


function App() {
  
  return (
    <div className="App">
      
      <Home1 />
    </div>
  );
}

export default App;
