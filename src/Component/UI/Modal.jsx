
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
export default function Modal({children}){
    const ModalStatus=useSelector(sotre=>sotre.Modal.modalStatus)
    const dialog=useRef()
    console.log(ModalStatus)
    useEffect(()=>{
        if(ModalStatus){
            dialog.current.showModal()
        }else if(!ModalStatus){
            dialog.current.close()
        }
    },[ModalStatus])
    return(
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>
    )
}