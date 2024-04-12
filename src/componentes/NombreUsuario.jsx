import React, { useState } from 'react';

const NombreUsuario = () => {
  const [nombre, setNombre] = useState('No definido'); // Establecer 'No definido' como valor inicial

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre === 'No definido' ? '' : nombre} // Mostrar nombre solo si es diferente de 'No definido'
        onChange={handleChange}
      />
    </div>
  );
};

export default NombreUsuario;


