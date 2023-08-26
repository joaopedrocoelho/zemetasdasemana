import React, { useContext, useState } from "react";
import Button from "../Button";
import { editAward } from "@/firebase/firebase";
import { ModalContext } from "@/context/modalContext";

const EditAward = () => {
  const [award, setAward] = useState("");
  const { closeModal } = useContext(ModalContext);

  const handleSave = async () => {
    try {
      await editAward(award).then(() => {
        closeModal();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-y-6 w-[200px]" id="edit-award">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        type="text"
        placeholder="Prêmio"
        required
        value={award}
        autoComplete="text"
        onChange={(e) => {
          setAward(e.target.value);
        }}
      />
      <Button
        color="green"
        onClick={() => {
          handleSave();
        }}
        type="button"
        label="Salvar"
      />
    </form>
  );
};

export default EditAward;
