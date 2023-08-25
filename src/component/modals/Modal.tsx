import { ModalContext } from "@/context/modalContext";
import { useForwardRef } from "@/hooks/useForwardRef";
import React, { forwardRef, useContext, useEffect, useRef } from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { IconContext } from "react-icons";

interface Props {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  const { open, closeModal } = useContext(ModalContext);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      open ? modalRef.current.showModal() : modalRef.current.close("closed");
    }
  }, [open]);

  return (
    <dialog
      className="w-screen z-20 h-screen max-w-full max-h-full bg-black/20 flex justify-center items-center m-0"
      ref={modalRef}
    >
      <div className="bg-white rounded-3xl w-86 flex flex-col gap-y-6 p-6 pt-16 relative shadow-md m-auto">
        <button
          onClick={() => {
            console.log("closing");
            onClose && onClose();
            closeModal();
          }}
        >
          <IconContext.Provider
            value={{
              className:
                "absolute right-4 top-4 cursor-pointer stroke-blue-500",
              size: "2rem",
            }}
          >
            <HiOutlineXCircle />
          </IconContext.Provider>
        </button>
        {children}
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";

export default Modal;
