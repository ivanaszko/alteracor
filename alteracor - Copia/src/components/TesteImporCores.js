//import './TesteImporCores.css';
import {useState} from 'react'

const TesteImporCores = () => {
  
  const [vermelho,setVermelho] = useState(0);
  const [verde,setVerde] = useState(0);
  const [azul,setAzul] = useState(0);
  
  const textAreaStyle = {
    'background-color': "#" + hex(vermelho) + hex(verde) + hex(azul) ,
  };
  
  function hex(number) {
  
    if (number > 15)
      { return Math.abs(number).toString(16); } else
      { return "0" + Math.abs(number).toString(16); }
  }
  return (
    <div className='container'>
      <coress />
      <div className="App">
        <div className='controles'>
          <p>
            <label htmlFor='vermelho'>Vermelho </label>
              <input type='range' id='vermelho' name='vermelho' min="0" max="255" onChange={(e) => setVermelho(e.target.value)} value={vermelho} />
              <div className='rotuloCores'>{vermelho}</div>
          </p>
          <p>
          <label htmlFor='verde'>verde </label>
              <input type='range' id='verde' name='text' min="0" max="255" onChange={(e) => setVerde(e.target.value)} value={verde} />
              <div className='rotuloCores'>{verde}</div>
          </p>
          <p>
          <label htmlFor='azul'>Azul </label>
              <input type='range'name='azul' id='azul' min="0" max="255" onChange={(e) => setAzul(e.target.value)} value={azul} />
              <div className='rotuloCores'>{azul}</div>
          </p>
        </div>
        <div className='componente'>
          <textarea style={textAreaStyle} rows="5" cols="10"> </textarea>
        </div>  
      </div>
    </div>
  );
}
  
export default TesteImporCores;


