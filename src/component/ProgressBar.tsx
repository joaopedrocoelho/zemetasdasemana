import React, { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "@/context/modalContext";
import EditPoints from "./modals/EditPoints";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { activeWeek } from "@/firebase/models";
import GuriOutline from "@/assets/guri-outline.svg";

const ProgressBar = ({
  currentPoints,
  targetPoints,
}: Omit<activeWeek, "updatedAt" | "deadline" | "award">) => {
  const [user, loading, error] = useAuthState(auth);
  const percentage = (currentPoints / targetPoints) * 100;

  const { setModal } = useContext(ModalContext);
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mb-10">
      <h3 className="font-lilita tracking-wider text-2xl">
        {currentPoints} / {targetPoints} pontos
      </h3>
      <div className="w-full flex h-11 bg-slate-100 rounded-full  p-1 ">
        <div
          className="bg-blue-400 rounded-full relative transition-all"
          style={{
            width: `${percentage}%`,
          }}
        >
          <GuriOutline className="w-14 absolute -right-[1.5rem]  -translate-y-[25%] drop-shadow-md" />
        </div>
      </div>
      {/* parte de admin */}
      {user && (
        <Button
          color="amber"
          onClick={() => {
            setModal(<EditPoints />);
          }}
          label="Editar pontos"
        />
      )}
    </div>
  );
};

export default ProgressBar;
