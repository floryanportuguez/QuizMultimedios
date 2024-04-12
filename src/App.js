import React from 'react';
import ContadorLikes from './componentes/Contador';
import NombreUsuario from './componentes/NombreUsuario';
import Calculadora from './componentes/Calculadora';

function App(){
    return(
        <div className="App"> 
        <div><ContadorLikes/>
        </div>
        <div><NombreUsuario/>
        </div>
        <div><Calculadora/>
        </div>
        </div>
    );
}

export default App;