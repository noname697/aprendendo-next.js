"use client";

import { useState } from "react";

const Button = () => {
  const [nome, setNome] = useState("Manentlu");

  const handleChangerName = () => {
    setNome("Arthur Manenti o fera ");
  };
  return (
    <div>
      <button onClick={handleChangerName}>Alterar Nome</button>
      <br />
      <h3>Nome: {nome}</h3>
    </div>
  );
};

export default Button;
