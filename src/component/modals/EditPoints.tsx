import React, { useContext, useState } from "react";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { editPoints } from "@/firebase/firebase";
import { ModalContext } from "@/context/modalContext";

const EditPoints = () => {
  const [currentPoints, setCurrentPoints] = useState("0");
  const [goalPoints, setGoalPoints] = useState("0");
  const { setModal } = useContext(ModalContext);

  const handleSave = async () => {
    console.log("Salvando...");
    try {
      await editPoints(parseInt(currentPoints), parseInt(goalPoints));
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <label className="text-bold">Pontos conquistados</label>
      <Input
        onChange={(e) => {
          setCurrentPoints(e.target.value);
        }}
        type="number"
        placeholder={currentPoints}
      />
      <label className="text-bold">Meta de pontos</label>
      <Input
        onChange={(e) => {
          setGoalPoints(e.target.value);
        }}
        type="number"
        placeholder={goalPoints}
      />
      <Button
        color="green"
        label="Salvar"
        onClick={() => {
          handleSave();
        }}
      />
    </Form>
  );
};

export default EditPoints;
