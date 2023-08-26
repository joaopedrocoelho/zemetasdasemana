import React, { useContext, useState } from "react";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { Goal } from "@/firebase/models";
import { addGoal } from "@/firebase/firebase";
import { ModalContext } from "@/context/modalContext";

const EditGoal = () => {
  const [title, setTitle] = useState("");
  const [goalPoints, setGoalPoints] = useState(0);
  const { closeModal } = useContext(ModalContext);

  const handleSave = async () => {
    try {
      const goal: Goal = {
        title,
        worth: goalPoints,
        points: 0,
      };
      console.log("adding goal...", goal);
      await addGoal(goal).then(() => {
        closeModal();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <label className="font-bold">Meta:</label>
      <Input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder={title}
        value={title}
      />
      <label className="font-bold">Valor da meta:</label>
      <Input
        onChange={(e) => {
          setGoalPoints(parseInt(e.target.value));
        }}
        type="number"
        placeholder={goalPoints.toString()}
        value={goalPoints.toString()}
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

export default EditGoal;
