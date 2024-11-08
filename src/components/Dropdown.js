import React from 'react';

const Dropdown = ({ label, options, onSelect, selectedValue }) => {
  return (
    <div>
      <label>{label}</label>
      <select 
        value={selectedValue} 
        onChange={(e) => onSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option} {/* Show the label if it's an object, or the value if it's not */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
