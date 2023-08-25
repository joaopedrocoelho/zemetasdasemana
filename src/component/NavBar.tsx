import React, { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "@/context/modalContext";
import LoginModal from "./modals/LoginModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "@/firebase/firebase";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const { setModal } = useContext(ModalContext);

  const LogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex w-full p-4 justify-end gap-x-8 items-center">
      {user && (
        <>
          <p>{user.email}</p>
          <Button
            color="red"
            onClick={() => {
              LogOut();
            }}
            label="Sair"
          />
        </>
      )}
      {!user && (
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
