import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  color: string;
  label: string;
}

const Button = ({ onClick, color, label, ...attributes }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`px-5 py-2.5 font-medium 
      bg-${color}-400 
      text-${color}-900
      rounded-lg 
      drop-shadow-md
      text-sm`}
      {...attributes}
    >
      {label}
    </button>
  );
};

export default Button;
