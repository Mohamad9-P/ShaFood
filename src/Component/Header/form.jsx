import {useActionState, useEffect} from "react"
import Modal from "../UI/Modal"
// import usehttp from "../../Hook/useHttp"
import Buttons from "../UI/Buttons"
import { useDispatch, useSelector } from "react-redux"
import { ModalAction } from "../../store/Modal-Slice"

// const config={method:"POST",headers:{"Content-type" : "application/json"}}

export default function Form(){
    const cartData=useSelector(store=>store.Carts.CartMeals)
    
    const ModalStatus=useSelector(store=>store.Modal.modalStatus)
    const dispatch=useDispatch()
    // const {data,isLoading,error,sendHttp}=usehttp('http://localhost:3000/orders',config)
    const price=cartData.reduce((acc,item)=> {return acc + (+item.price * item.Selected)},0)
    async function handelaction(state,formdata){
        const data=Object.fromEntries(formdata.entries())
        let error=[]
        // console.log(formdata)
        if(!data.name.trim("")){
            error.push("Complide your Fullname")
        }
        if(!data.email.includes("@") || !data.email.trim("")){
            error.push("Your email is not True!")
        }
        if(!data.street.trim("")){
            error.push("Complide your Street!")
        }
        if(!data.postal.trim("")){
            error.push("Complide your Postal")
        }
        if(error.length > 0){
            return {error:error , defaultvalue:data}
        }
        const oldData = JSON.parse(localStorage.getItem("FormData")) || [];
        const NewData=cartData.map(prev=>{ return {name:prev.name ,id:prev.id , price:prev.price , Selected:prev.Selected , image:prev.image}})
        const updatedData = [...oldData.flat(2),NewData.flat(2) ];
        localStorage.setItem("FormData",JSON.stringify(updatedData))
        

        // await sendHttp(JSON.stringify({order:{
        //     items:cartData,customer:data
        //   }}))
        dispatch(ModalAction.opening("CheckOut"))
        return {error:null,}
    }

    const [action,actionstate,pending]=useActionState(handelaction,{error:null})
    //console.log(action.defaultvalue)

    return(
        <>
        {ModalStatus==="Form" && <Modal>
            <form action={actionstate}>
                <h2>Checkout</h2>
                <h4 className="price">{price}$</h4>
                <div className="divform">
                    <label htmlFor="name">Full Name:</label>
                    <input id="name" name="name" type="text" 
                    defaultValue={action.defaultvalue?action.defaultvalue.fullname:null} />
                </div>
                <div className="divform">
                    <label htmlFor="email">E-Mail Address:</label>
                    <input id="email" name="email" type="text"
                    defaultValue={action.defaultvalue?action.defaultvalue.Email:null}/>
                </div>
                <div className="divform">
                    <label htmlFor="street">Street</label>
                    <input type="street" id="street" name="street"
                    defaultValue={action.defaultvalue?action.defaultvalue.street:null}  />
                </div>
                <div className="divform">
                    <label htmlFor="postal">Postal Code:</label>
                    <input type="postal" id="postal" name="postal"
                    defaultValue={action.defaultvalue?action.defaultvalue.postal:null} />
                </div>
                <ul className="error">
                    {action.error !==null && action.error.map(error=>{
                        return(
                            <li>{error}</li>
                        )
                    })}
                </ul>
                <div className="buttons">
                    <Buttons type="button" className="close" onClick={()=>dispatch(ModalAction.closing())} >Close</Buttons>
                    <Buttons  className="text-button" type="submit" disabled={pending}>Submit Order</Buttons>                
                </div>

        </form>
        </Modal>
        }
        </>
    )
}