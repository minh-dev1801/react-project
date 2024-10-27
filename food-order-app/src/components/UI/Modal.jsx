import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "" }) => {
  const dialog = useRef();

  let cssClasses =
    "w-2/5 rounded-md bg-[#e4ddd4] p-4 shadow-md backdrop:bg-[#0000008c]";
  cssClasses += " " + className;

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={cssClasses}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
