import React, { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "@/context/modalContext";
import AddGoal from "./modals/AddGoal";

const AdminBtns = () => {
  const { setModal } = useContext(ModalContext);

  const handleAddGoal = () => {
    setModal(<AddGoal />);
  };

  return (
    <div className="flex justify-between mt-16">
      <Button
        color="green"
        onClick={() => {
          handleAddGoal();
        }}
        label="Adicionar meta"
      />
    </div>
  );
};

export default AdminBtns;
