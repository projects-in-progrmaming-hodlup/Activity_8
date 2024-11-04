import React, { useState } from 'react';
import Dropdown from './Dropdown';

const NotificationForm = ({ onSubmit }) => {
  const [notificationType, setNotificationType] = useState('');
  const [thresholdValue, setThresholdValue] = useState('');
  const [notificationMethod, setNotificationMethod] = useState('');

  const handleSubmit = () => {
    const alertData = {
      notificationType,
      thresholdValue,
      notificationMethod,
    };
    onSubmit(alertData);
  };

  return (
    <div>
      <h2>Set Notification</h2>

      {/* Dropdown for Notification Type */}
      <Dropdown
        label="Get notified by change in:"
        options={['Price', 'Percentage']}
        onSelect={setNotificationType}
      />

      {/* Input for Threshold */}
      <div>
        <label>Set Threshold</label>
        <input
          type="number"
          value={thresholdValue}
          onChange={(e) => setThresholdValue(e.target.value)}
        />
      </div>

      {/* Dropdown for Notification Method */}
      <Dropdown
        label="Notification Method"
        options={['Email', 'SMS', 'Phone Call', 'Whatsapp', 'Slack', 'Discord']}
        onSelect={setNotificationMethod}
      />

      {/* Submit Button */}
      <button onClick={handleSubmit}>Set Alert!</button>
    </div>
  );
};

export default NotificationForm;