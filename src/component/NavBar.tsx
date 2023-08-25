import React, { useContext } from "react";
import Button from "./Button";
import { UserContext } from "@/context/userContext";
import { authenticate } from "../../firebase";
import { ModalContext } from "@/context/modalContext";
import LoginModal from "./modals/LoginModal";

const NavBar = () => {
  const { email, setUser } = useContext(UserContext);
  const { setModal } = useContext(ModalContext);

  return (
    <nav className="flex w-full p-4 justify-end gap-x-8 items-center">
      {email && (
        <>
          <p>{email}</p>
          <Button color="red" onClick={() => {}} label="Sair" />
        </>
      )}
      {!email && (
        <>
          <Button
            color="green"
            onClick={() => {
              setModal(<LoginModal />);
            }}
            label="Entrar"
          />
        </>
      )}
    </nav>
  );
};

export default NavBar;
