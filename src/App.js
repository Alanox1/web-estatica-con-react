import './App.css';
import Main from './components/Main';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor'>
           <h4 className='title'>Argentina Yoga Studios</h4>
          <nav>
            <a href='#'>Inicio</a>
            <a href='#'>Opciones</a>
            <a href='#'>Contacto</a>
          </nav>
        </div>
      </header>
      <Main />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
