import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...attributes }: Props) => {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      {...attributes}
    ></input>
  );
};

export default Input;
