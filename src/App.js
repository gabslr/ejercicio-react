import './App.css';
import Testimonio from './components/Testimonio';
import datosTestimonio from './components/datosTestimonio'; 

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Artistas que revolucionaron al mundo:</h1>
        {datosTestimonio.map((testimonio, datos) => (
          <Testimonio
            key={datos} 
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
