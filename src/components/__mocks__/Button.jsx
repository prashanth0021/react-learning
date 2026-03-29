import React from 'react';

const MockButton = ({ children, ...props }) => {
  return (
    <button data-testid="mock-button" {...props}>
      {children}
    </button>
  );
};

export default MockButton;
