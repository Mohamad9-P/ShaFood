import { useDispatch, useSelector } from "react-redux"
import Modal from "../UI/Modal"
import Buttons from "../UI/Buttons"
import {ModalAction}  from "../../store/Modal-Slice"
import { CartAction } from "../../store/Carts-Slice"
import Orders from "./Orders"

export default function Success(){
    const ModalStatus=useSelector(store=>store.Modal.modalStatus)
    const cartData=useSelector(store=>store.Carts.CartMeals)
    const dispatch=useDispatch()
    function handelSucces(){
        dispatch(ModalAction.closing())
        dispatch(CartAction.addOrders(cartData))        
    }

            return(
                <>
                    {ModalStatus==="CheckOut" &&<Modal>
                    <div className="success">
                        <h1>Success!</h1>
                        <p>Your order was submit successfully.</p>
                        <p>We will get back to you with more details via emial within the next few minutes.</p>
                        <Buttons onClick={()=>handelSucces()} className="text-button">Okey!</Buttons>
                    </div>
                </Modal>}
                </>

            )
        
}