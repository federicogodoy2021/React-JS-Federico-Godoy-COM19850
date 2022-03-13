import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//Se importa bootstrap con componentes
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Container/ItemListContainer';
import ProductList from './components/ProductList/ProductList';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
         <ItemListContainer />{/*saludo='Bienvenidos al Athom Sport Rosario'/>{/* Acá va mi saludo */}
        <img src={logo} className="App-logo" alt="logo" />
        
        <ProductList/>

      </header>
        
    </div>

    
  );
}

export default App;
