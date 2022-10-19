import logo from './logo.svg';
import './input_select.css';

function input_select() {
  return (
    <div className="App">
      <div className='controles'>
        <input type='Number' name='vermelho' />
        <input type='Number' name='verde' />
        <input type='Number'name='azul' />
      </div>
      <div className='componente'>
        <textarea  rows="4" cols="50"> </textarea>
      </div>
      <div><p><form id="form1"> 

        <input   class="box" list="Country" name="Countries" placeholder=" Country" />

              <datalist  id="Country">
               <option value=" Afghanistan"> </option>
               <option value=" Albania"></option>
               <option value=" Algeria"></option>
               <option value=" American Samoa"></option>
               <option value=" Andorra"></option>
               <option value=" Angola"></option>
               <option value=" Anguilla"></option>
               <option value=" Antigua and Barbuda"></option>
               <option value=" Argentina"></option>
               <option value=" Armenia"></option>
               <option value=" Aruba"></option>
               <option value=" Australia"></option>
               <option value=" Austria"></option>
               
                </datalist> 
                </form>
            </p></div>

    </div>
  );
}

export default App;
