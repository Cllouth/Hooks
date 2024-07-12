import React, { useState, useEffect } from 'react';

const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [messageVisible, setMessageVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessageVisible(true);
      setMessage('Olá, mundo!');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (messageVisible) {
      const timeoutId = setTimeout(() => {
        setMessageVisible(false);
        setMessage('');
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [messageVisible]);

  return (
    <div>
      <h1>{currentTime.toLocaleTimeString()}</h1>
      {messageVisible && <p>{message}</p>}
    </div>
  );
};

export default ClockComponent;