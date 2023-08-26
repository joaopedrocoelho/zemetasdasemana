import { useContext, useEffect, useRef, useState } from "react";
import AdminBtns from "../component/AdminBtns";
import Goal from "../component/Goal";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import ProgressBar from "../component/ProgressBar";
import { ModalContext } from "@/context/modalContext";
import Modal from "@/component/modals/Modal";
import { set } from "firebase/database";
import ActiveWeek from "@/component/ActiveWeek";
import ActiveGoals from "@/component/ActiveGoals";

export default function Home() {
  const [modal, setNewModal] = useState<JSX.Element | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const setModal = (modal: JSX.Element | null) => {
    setNewModal(modal);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setNewModal(null);
  };

  return (
    <ModalContext.Provider value={{ Modal: modal, setModal, closeModal, open }}>
      {modal && <Modal>{modal}</Modal>}
      <NavBar />
      <main className="w-full flex flex-col px-[5%] items-center pt-[5%] pb-20">
        <ActiveWeek />
        <ActiveGoals />
      </main>
    </ModalContext.Provider>
  );
}
