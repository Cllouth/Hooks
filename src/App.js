import React from 'react';
import ReactDOM from 'react-dom/client';
import FormComponent from './Componentes/Formulario';
import ClockComponent from './Componentes/Relogio';
import FactorialCalculator from './Componentes/Fatorial'
import TodoList from './Componentes/Todolist';
import GerenciamentoOrcamento from './Componentes/Saldo'
import { AuthProvider } from './Componentes/AuthContext';
import App2 from './App2'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AuthProvider>
          <App2/>
          <FormComponent/>
          <ClockComponent/>
          <FactorialCalculator/>
          <TodoList/>
          <GerenciamentoOrcamento/>
        </AuthProvider> 
      </header>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
); 

export default App;
