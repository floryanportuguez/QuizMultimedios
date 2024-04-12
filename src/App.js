import React from 'react';
import ContadorLikes from './componentes/Contador';
import NombreUsuario from './componentes/NombreUsuario';
import Calculadora from './componentes/Calculadora';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="componente">
        <ContadorLikes />
      </div>
      <div className="componente">
        <NombreUsuario />
      </div>
      <div className="componente">
        <Calculadora />
      </div>
    </div>
  );
}

export default App;