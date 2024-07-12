import React, { useState } from 'react';
import { useAuth } from './AuthContext.jsx';

const Login = () => {
  const [nome, setNome] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    login({ nome });
  };

  return (
    <div>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;