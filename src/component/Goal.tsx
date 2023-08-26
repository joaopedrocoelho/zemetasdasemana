import React from "react";
import Button from "./Button";
import { Goal } from "@/firebase/models";

interface Props extends Goal {
  id: string;
}

const GoalComponent = ({ title, id, points, worth }: Props) => {
  const timesDone = points >= worth ? points / worth : 0;
  const vezOuVezes = timesDone === 1 ? "vez" : "vezes";

  const handleDone = async () => {};

  const handleEdit = () => {};

  const handleUndo = async () => {};
  return (
    <section className="flex flex-col w-full bg-slate-100 px-2.5 py-2.5 rounded-lg drop-shadow-md">
      <div className="flex items-center justify-normal mb-2 gap-x-4">
        <h3 className="font-lilita tracking-wider text-xl">{title}</h3>
        <div
          className="ml-auto flex flex-col justify-center items-center 
        px-2.5 py-2 bg-orange-300 rounded-md text-orange-900"
        >
          <span className=" text-4xl font-lilita">{worth}</span>
          <span className="text-sm font-lilita tracking-wider">pontos</span>
        </div>
      </div>
      <h6 className="text-base mb-8 font-light">
        Feita {timesDone} {vezOuVezes} essa semana
      </h6>
      {/* parte de admin */}
      <div className="flex justify-between">
        <Button color="green" onClick={() => {}} label="Feito" type="button" />
        <Button color="amber" onClick={() => {}} label="Editar" type="button" />
        {/*se zero pontos mudar pra excluir*/}
        <Button color="red" onClick={() => {}} label="Desfeito" type="button" />
      </div>
    </section>
  );
};

export default GoalComponent;
