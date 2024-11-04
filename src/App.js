// src/App.js
import React, { useState } from 'react';
import NotificationForm from './components/NotificationForm';

function App() {
  const [alertData, setAlertData] = useState(null);

  const handleSubmit = (data) => {
    setAlertData(data);
    console.log('Alert Data:', data); // You can log or handle the data as needed
  };

  return (
    <div className="App">
      {/* Render NotificationForm and pass handleSubmit as onSubmit prop */}
      <NotificationForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;