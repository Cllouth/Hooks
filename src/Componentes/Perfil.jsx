import React from 'react';
import { useAuth } from './AuthContext.jsx'

const Perfil = () => {
  const { usuario, logout } = useAuth();

  if (!usuario) return <p>Você não está logado.</p>;

  return (
    <div>
      <p>Olá, {usuario.nome}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Perfil;