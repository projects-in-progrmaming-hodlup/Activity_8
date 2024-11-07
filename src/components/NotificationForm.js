// src/components/NotificationForm.js
import React, { useState } from 'react';
import './NotificationForm.css';
import Button from './Button';
import Dropdown from './Dropdown';

const NotificationForm = ({ onSubmit, cryptocurrencies }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0].id);
  const [notificationType, setNotificationType] = useState('Price');
  const [thresholdValue, setThresholdValue] = useState('');
  const [notificationMethod, setNotificationMethod] = useState('Email');

  const handleSubmit = () => {
    const alertData = {
      cryptocurrencyId: selectedCrypto,
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
          value: crypto.id,
          label: crypto.name,
        }))}
        onSelect={setSelectedCrypto}
        selectedValue={selectedCrypto}
      />

      {/* Existing form fields */}
      <Dropdown
        label="Get notified by change in:"
        options={[
          { value: 'Price', label: 'Price' },
          { value: 'Percentage', label: 'Percentage' },
        ]}
        onSelect={setNotificationType}
        selectedValue={notificationType}
      />

      <div>
        <label>Set Threshold</label>
        <input
          type="number"
          value={thresholdValue}
          onChange={(e) => setThresholdValue(e.target.value)}
          step="any"
          placeholder="Enter threshold value"
        />
      </div>

      <Dropdown
        label="Notification Method"
        options={[
          { value: 'Email', label: 'Email' },
          { value: 'SMS', label: 'SMS' },
          { value: 'Phone Call', label: 'Phone Call' },
          { value: 'Whatsapp', label: 'Whatsapp' },
          { value: 'Slack', label: 'Slack' },
          { value: 'Discord', label: 'Discord' },
        ]}
        onSelect={setNotificationMethod}
        selectedValue={notificationMethod}
      />

      <Button text="Set Alert!" onClick={handleSubmit} />
    </div>
  );
};

export default NotificationForm;
