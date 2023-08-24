import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-2  mb-16 items-center">
      <h1 className="text-4xl font-bold">Metas da Semana</h1>
      <h5>de 10/9/2023 até 17/9/2023</h5>
      <h2 className="text-xl mt-4 flex gap-x-4 items-center">
        <b>Prêmio:</b> 50 reais
        {/* parte de admin */}
        <Button color="amber" onClick={() => {}} label="Editar premio" />
      </h2>
    </div>
  );
};

export default Header;
