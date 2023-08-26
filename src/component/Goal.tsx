import React, { useContext } from "react";
import Button from "./Button";
import { Goal } from "@/firebase/models";
import { auth, markGoalAsDone, markGoalAsUnDone } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconContext } from "react-icons";
import { HiTrash } from "react-icons/hi";
import { ModalContext } from "@/context/modalContext";
import DeleteGoal from "./modals/DeleteGoal";

interface Props extends Goal {
  id: string;
}

const GoalComponent = ({ title, id, points, worth }: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const timesDone = points >= worth ? points / worth : 0;
  const vezOuVezes = timesDone === 1 ? "vez" : "vezes";

  const handleDone = async () => {
    try {
      await markGoalAsDone(id, worth);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUndo = async () => {
    try {
      await markGoalAsUnDone(id, worth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col w-full bg-slate-100 px-2.5 py-2.5 rounded-lg drop-shadow-md">
      <div className="flex items-center justify-normal mb-2 gap-x-4">
        {user && <DeleteIcon id={id} />}
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
        {user && (
          <>
            <Button
              color="green"
              onClick={() => {
                handleDone();
              }}
              label="Feito"
              type="button"
            />
            {timesDone > 0 && (
              <Button
                color="red"
                onClick={() => {
                  handleUndo();
                }}
                label="Desfeito"
                type="button"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

const DeleteIcon = ({ id }: { id: string }) => {
  const { setModal } = useContext(ModalContext);
  console.log("delete icon", id);
  return (
    <button
      type="button"
      onClick={() => {
        setModal(<DeleteGoal id={id} />);
      }}
      className="p-2 rounded-full bg-red-200"
    >
      <IconContext.Provider
        value={{
          className: "cursor-pointer fill-red-500",
          size: "1.5rem",
        }}
      >
        <HiTrash />
      </IconContext.Provider>
    </button>
  );
};

export default GoalComponent;
