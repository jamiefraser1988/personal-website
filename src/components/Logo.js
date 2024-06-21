import React from 'react';

function Logo() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke="#9c27b0" strokeWidth="10" fill="#333" />
      <text x="100" y="115" textAnchor="middle" fontSize="70" fill="#fff" fontFamily="Arial, sans-serif">JF</text>
    </svg>
  );
}

export default Logo;
