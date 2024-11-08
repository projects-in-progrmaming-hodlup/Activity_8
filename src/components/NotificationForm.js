import React, { useState } from 'react';
import './NotificationForm.css';
import Button from './Button';
import Dropdown from './Dropdown';

const NotificationForm = ({ onSubmit, cryptocurrencies, initialData}) => {
  const [selectedCrypto, setSelectedCrypto] = useState(initialData.selectedCrypto || cryptocurrencies[0].name);
  const [notificationType, setNotificationType] = useState(initialData.notificationType || 'Price');
  const [thresholdValue, setThresholdValue] = useState(initialData.thresholdValue || '');
  const [notificationMethod, setNotificationMethod] = useState(initialData.notificationMethod || 'Email');

  const handleSubmit = () => {
    const alertData = {
      selectedCrypto,
      notificationType,
      thresholdValue,
      notificationMethod,
    };
    onSubmit(alertData);
    console.log(alertData);
  };

  return (
    <div>
      <h2>Set Notification</h2>

      {/* Dropdown for Cryptocurrency Selection */}
      <Dropdown
        label="Select Cryptocurrency:"
        options={cryptocurrencies.map((crypto) => ({
          value: crypto.name,
          label: crypto.name,
        }))}
        onSelect={setSelectedCrypto}
        selectedValue={selectedCrypto}
      />

       {/* Dropdown for Notification Type */}
       <Dropdown
        label="Get notified by change in:"
        options={['Price', 'Percentage']}
        onSelect={setNotificationType}
        selectedValue={notificationType} // Pass current value to dropdown 
      />

      {/* Input for Threshold */}
      <div>
        <label>Set Threshold</label>
        <input
          type="number"
          value={thresholdValue}
          onChange={(e) => setThresholdValue(e.target.value)}
          step="any" // Allows decimals; 
          placeholder="Enter threshold value"
        />
      </div>

      {/* Dropdown for Notification Method */}
      <Dropdown
        label="Notification Method"
        options={['Email', 'SMS', 'Phone Call', 'Whatsapp', 'Slack', 'Discord']}
        onSelect={setNotificationMethod}
        selectedValue={notificationMethod} // Pass current value to dropdown 
      />

       {/* Submit Button */}
       <Button text="Set Alert!" onClick={handleSubmit} />
    </div>
  );
};

export default NotificationForm;
