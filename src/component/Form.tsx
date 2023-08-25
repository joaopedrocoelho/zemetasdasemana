import React from "react";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, ...attributes }: Props) => {
  return (
    <form
      className="flex flex-col gap-y-6 w-[200px]"
      id="edit-award"
      {...attributes}
    >
      {children}
    </form>
  );
};

export default Form;
