import Modal from "../UI/Modal";
import EmptyOrders from "./EmptyOrders";
import Buttons from "../UI/Buttons";

import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/Modal-Slice";
import FullOrders from "./FullOrders";
import { useEffect, useState } from "react";






export default function Orders(){
    const [CartOrders , setCartOrders]=useState([])
    const ModalStatus=useSelector(store=>store.Modal.modalStatus)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(ModalStatus==="OpenOrders" || ModalStatus==="CheckOut"){
            setCartOrders(JSON.parse(localStorage.getItem("FormData")))
        }
    },[ModalStatus])
    function removeItem(id) {
        console.log("start")
        const newData = CartOrders.flat().filter(item => item.id !== id);
        localStorage.setItem("FormData", JSON.stringify(newData));
        setCartOrders(newData)
      }

    return(
        <>
        {ModalStatus==="OpenOrders" && 
            <Modal>
                <div className="Orders">
                    <div className="h1Orders">
                        <h1>Orders!</h1>   
                        <img src="../public/car.png"/>
                    </div>
                    {(CartOrders && CartOrders.length===0) && <EmptyOrders/> }
                    {(CartOrders || CartOrders.length > 0) && <FullOrders data={CartOrders.flat(1)} removeItem={removeItem} />}
                    <Buttons onClick={()=>dispatch(ModalAction.closing())} className="close">Close</Buttons>
                </div>
            </Modal>
        }
        </>
    )
}