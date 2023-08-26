import React, { useContext, useState } from "react";
import Button from "../Button";
import { login } from "@/firebase/firebase";
import { ModalContext } from "@/context/modalContext";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();

  const { closeModal } = useContext(ModalContext);

  const Login = async () => {
    try {
      await login(email, password);
      closeModal();
    } catch (error) {
      setError(JSON.stringify(error));
    }
  };
  return (
    <form className="flex flex-col gap-y-6 w-[200px]" id="login">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        type="email"
        placeholder="Email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        type="password"
        placeholder="Senha"
        autoComplete="current-password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <Button
        color="green"
        onClick={() => {
          console.log("submit");
          Login();
        }}
        label="Entrar"
        type="submit"
      />
    </form>
  );
};

export default LoginModal;
