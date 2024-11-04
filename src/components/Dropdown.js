import React from 'react';

const Dropdown = ({ label, options, onSelect }) => {
  return (
    <div>
      <label>{label}</label>
      <select onChange={(e) => onSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;