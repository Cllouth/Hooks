import React, { useRef } from 'react';

const FormComponent = () => {
  const inputRef = useRef(null);

  const handleClearInput = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Digite algo" />
      <button onClick={handleClearInput}>Limpar</button>
    </div>
  );
};

export default FormComponent;