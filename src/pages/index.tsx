import { useContext, useEffect, useRef, useState } from "react";
import AdminBtns from "../component/AdminBtns";
import Goal from "../component/Goal";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import ProgressBar from "../component/ProgressBar";
import { UserContext } from "@/context/userContext";
import { ModalContext } from "@/context/modalContext";
import Modal from "@/component/modals/Modal";

export default function Home() {
  const [email, setUser] = useState<string>("");
  const [modal, setNewModal] = useState<JSX.Element | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const setModal = (modal: JSX.Element | null) => {
    setNewModal(modal);
    modalRef.current?.showModal();
  };

  useEffect(() => {
    console.log("modal", modal);
  }, [modal]);

  return (
    <ModalContext.Provider value={{ Modal: modal, setModal }}>
      <UserContext.Provider value={{ email, setUser }}>
        {modal && <Modal ref={modalRef}>{modal}</Modal>}
        <NavBar />
        <main className="w-full flex flex-col px-[5%] items-center pt-[5%] pb-20">
          <Header />
          <ProgressBar />
          <Goal />
          <AdminBtns />
        </main>
      </UserContext.Provider>
    </ModalContext.Provider>
  );
}
