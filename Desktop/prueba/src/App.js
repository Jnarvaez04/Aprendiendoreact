import logo from './assets/images/logo.svg';
import './assets/css/App.css';


import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>);
  
  return presentacion;
}

function App() {
  var nombre = "Jhoan Narvaez";
  
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          HolaMundo(nombre, 20)
        }
        
          Learn React

          <div className="componentes">

            <MiComponente/>

            </div>



      </header>
     


    </div>
  );
}

export default App;
