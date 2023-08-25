import { createContext } from "react";

export interface ModalContextValues {
  Modal: JSX.Element | null;
  setModal: (modal: JSX.Element | null) => void;
  open: boolean;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValues>({
  Modal: null,
  setModal: () => {},
  closeModal: () => {},
  open: false,
});
