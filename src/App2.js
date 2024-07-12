import React from 'react';
import { AuthProvider } from './Componentes/AuthContext.jsx'
import Login from './Componentes/Login.jsx';
import Perfil from './Componentes/Perfil.jsx';

const App2 = () => (
  <AuthProvider>
    <Login/>
    <Perfil/>
  </AuthProvider>
);

export default App2;