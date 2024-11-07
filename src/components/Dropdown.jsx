import React from 'react';

const Dropdown = ({ label, options, value, onChange, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-gray-700 mb-2">{label}</label>
      <select
        className="rounded-full border-gray-300 p-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={onChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;