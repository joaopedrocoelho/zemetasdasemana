import React from "react";

interface ButtonProps {
  onClick: () => void;
  color: string;
  label: string;
}

const Button = ({ onClick, color, label }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 font-medium 
      bg-${color}-400 
      text-${color}-900
      rounded-lg 
      text-sm`}
    >
      {label}
    </button>
  );
};

export default Button;
