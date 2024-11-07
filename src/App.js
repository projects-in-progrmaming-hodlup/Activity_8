// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NotificationForm from './components/NotificationForm';
import mockCryptocurrencies from './data/mockData';

function App() {
  const [alertData, setAlertData] = useState(null);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    // Simulate API call with a delay
    setTimeout(() => {
      setCryptocurrencies(mockCryptocurrencies);
    }, 1000); // 1-second delay
  }, []);

  const handleSubmit = (data) => {
    setAlertData(data);
    console.log('Alert Data:', data);
  };

  return (
    <div className="App">
      <Header /> {/* Add Header */}
      {cryptocurrencies.length > 0 ? (
        <NotificationForm
          onSubmit={handleSubmit}
          cryptocurrencies={cryptocurrencies}
        />
      ) : (
        <p>Loading cryptocurrencies...</p>
      )}
    </div>
  );
}

export default App;
