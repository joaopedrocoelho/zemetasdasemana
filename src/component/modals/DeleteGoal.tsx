import React, { useContext } from "react";
import Button from "../Button";
import { ModalContext } from "@/context/modalContext";
import { deleteGoal } from "@/firebase/firebase";

const DeleteGoal = ({ id }: { id: string }) => {
  const { closeModal } = useContext(ModalContext);
  console.log("delete modal", id);

  const handleDelete = async () => {
    try {
      console.log("Deletando..." + id);
      await deleteGoal(id).then(() => {
        closeModal();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <h1 className="text-xl max-w-[250px] text-center">
        Tem certeza que deseja deletar essa meta?
      </h1>
      <div className="flex gap-x-4">
        <Button
          color="amber"
          onClick={() => {
            closeModal();
          }}
          label="Cancelar"
        />
        <Button
          color="red"
          onClick={() => {
            handleDelete();
          }}
          label="Deletar"
        />
      </div>
    </div>
  );
};

export default DeleteGoal;
