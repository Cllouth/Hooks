import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(1);

  const calculateFactorial = useMemo(() => {
    if (number < 0) {
      return 'Não é possível calcular o fatorial de um número negativo';
    }

    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  const handleInputChange = (event) => {
    setNumber(parseInt(event.target.value, 10));
  };

  const handleCalculateClick = () => {
    setResult(calculateFactorial);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={handleCalculateClick}>Calcular fatorial</button>
      <p>O fatorial de {number} é: {result}</p>
    </div>
  );
};

export default FactorialCalculator;