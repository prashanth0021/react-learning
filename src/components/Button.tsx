
import React from 'react';

interface Props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Button: React.FC<Props> = ({ label, onClick, color }) => (
  <button className="btn btn-primary" onClick={onClick} style={{ color }}>
    {label}
  </button>
);

export default Button;