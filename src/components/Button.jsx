// src/components/Button.jsx
import React from 'react';

const Button = ({ children, disabled, className = '', ...props }) => {
  return (
    <button
      className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
