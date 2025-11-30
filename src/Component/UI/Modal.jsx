import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function Modal({ children }) {
  const ModalStatus = useSelector(store => store.Modal.modalStatus);
  const dialog = useRef();

  useEffect(() => {
    if (ModalStatus) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [ModalStatus]);
    return createPortal(
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>,
        document.getElementById("modal-root")
    )
}