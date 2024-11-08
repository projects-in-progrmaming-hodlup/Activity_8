import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NotificationForm from './components/NotificationForm';
import Confirmation from './components/Comfirmation';
import mockCryptocurrencies from './data/mockData';

function App() {
  const [formStatus, setFormStatus] = useState('form'); // Tracks current view: 'form' or 'confirmation'
  const [alertData, setAlertData] = useState({
    selectedCrypto: 1,  // Default to the first cryptocurrency
    selectedCryptoName: 'Bitcoin', 
    notificationType: 'Price',  
    thresholdValue: '',
    notificationMethod: 'Email'
  }); // stores the user's input for the notification settings and setting default values 
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    // Simulate API call with a delay
    setTimeout(() => {
      setCryptocurrencies(mockCryptocurrencies);
    }, 1000); // 1-second delay
  }, []);

  const handleFormSubmit = (data) => {
    setAlertData(data);
    //console.log('Alert Data:', data);
    setFormStatus('confirmation'); // Switch to confirmation view
  };

// This function allows the user to modify the previously entered data 
const handleModify = () => {
  setFormStatus('form'); // Go back to form view with existing data
};

return (
  <div className="App">
    <Header /> {/* Add Header */}
    <h1>Welcome to HodlUP!</h1>
    {formStatus === 'form' && cryptocurrencies.length > 0 ? (
      <NotificationForm onSubmit={handleFormSubmit} initialData={alertData} cryptocurrencies={cryptocurrencies} />
    ) : formStatus === 'confirmation' ? (
      <Confirmation alertData={alertData} onModify={handleModify} />
    ) : (
      <p>Loading cryptocurrencies...</p>
    )}
  </div>
);
}

export default App;


