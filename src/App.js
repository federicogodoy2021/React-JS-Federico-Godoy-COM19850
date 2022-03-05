import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//Se importa bootstrap con componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Container/ItemListContainer';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo='Bienvenidos al Stadium Rosario'/>{/* Acá va mi saludo */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mi proyecto React JS - Federico Godoy</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
