import React, { useState } from 'react';

const GerenciamentoOrcamento = () => {
  const [saldo, setSaldo] = useState(0);
  const [despesa, setDespesa] = useState('');
  const [valor, setValor] = useState('');
  const [despesas, setDespesas] = useState([]);

  const adicionarDespesa = () => {
    const valorNum = parseFloat(valor);
    if (!isNaN(valorNum) && valorNum > 0) {
      setDespesas([...despesas, { despesa, valor: valorNum }]);
      setSaldo(saldo - valorNum);
      setDespesa('');
      setValor('');
    }
  };

  const calcularSaldo = () => {
    return saldo - despesas.reduce((acc, item) => acc + item.valor, 0);
  };

  return (
    <div>
      <h1>Gerenciamento de Orçamento</h1>
      <p>Saldo: R${calcularSaldo().toFixed(2)}</p>
      <div>
        <input
          type="text"
          placeholder="Despesa"
          value={despesa}
          onChange={(e) => setDespesa(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button onClick={adicionarDespesa}>Adicionar Despesa</button>
      </div>
      <ul>
        {despesas.map((item, index) => (
          <li key={index}>{item.despesa}: R${item.valor.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default GerenciamentoOrcamento;