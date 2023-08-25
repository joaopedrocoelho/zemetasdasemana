import React from "react";
import Button from "./Button";

const Goal = () => {
  return (
    <section className="flex flex-col w-full bg-slate-100 px-2.5 py-2.5 rounded-lg drop-shadow-sm">
      <div className="flex items-center justify-normal mb-2 gap-x-4">
        <h3 className="font-bold text-xl">
          Nome da meta Nome da meta Nome da meta
        </h3>
        <div
          className="ml-auto flex flex-col justify-center items-center 
        px-2.5 py-2 bg-orange-300 rounded-md text-orange-900"
        >
          <span className=" text-2xl font-extrabold">20</span>
          <span className="text-sm">pontos</span>
        </div>
      </div>
      <h6 className="text-base mb-8 font-light">Feita 3 vezes essa semana</h6>
      {/* parte de admin */}
      <div className="flex justify-between">
        <Button color="green" onClick={() => {}} label="Feito" />
        <Button color="amber" onClick={() => {}} label="Editar" />
        {/*se zero pontos mudar pra excluir*/}
        <Button color="red" onClick={() => {}} label="Desfeito" />
      </div>
    </section>
  );
};

export default Goal;
