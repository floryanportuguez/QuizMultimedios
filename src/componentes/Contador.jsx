import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ContadorLikes = () => {
  const [likes, setLikes] = useState(0);

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };

  const disminuirLikes = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
      <h2>Cantidad de Likes: {likes}</h2>
      <button onClick={aumentarLikes}><FaThumbsUp /> Like</button>
      <button onClick={disminuirLikes}><FaThumbsDown /> Dislike</button>
    </div>
  );
};

export default ContadorLikes;