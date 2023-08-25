import { ModalContext } from "@/context/modalContext";
import { useForwardRef } from "@/hooks/useForwardRef";
import React, { forwardRef, useContext } from "react";
import { HiOutlineXCircle } from "react-icons/hi";

interface Props {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ children, onClose }, ref) => {
    const modalRef = useForwardRef<HTMLDialogElement>(ref);
    return (
      <dialog
        className="w-full h-full bg-black/20 flex justify-center items-center"
        ref={ref}
      >
        <div className="bg-white rounded-3xl w-86 flex flex-col gap-y-6 p-6 pt-8 relative shadow-md m-auto">
          <HiOutlineXCircle
            className="w-4 stroke-secondary-20 absolute right-4 top-4 cursor-pointer"
            onClick={() => {
              onClose && onClose();
              modalRef.current && modalRef.current.close();
            }}
          />
          {children}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
