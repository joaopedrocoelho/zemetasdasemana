import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex w-full p-4 justify-end gap-x-8 items-center">
      <p>anacarolina@gmail.com</p>
      <Button color="blue" onClick={() => {}} label="Sair" />
    </nav>
  );
};

export default NavBar;
