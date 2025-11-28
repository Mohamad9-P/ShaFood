import './search.css'
import { useDispatch, useSelector } from "react-redux"
import { CartAction } from "../../store/Carts-Slice.jsx"
import { useRef, useState } from "react"
import Modal from "../UI/Modal.jsx"
import { data  } from '../../data.js'
import { ModalAction } from '../../store/Modal-Slice.jsx'

export default function Search(){
    const dispatch=useDispatch()
    const modalStatus=useSelector(store=>store.Modal.modalStatus)
    const dataSearch=useSelector(store=>store.Carts.dataSearch)
    const inputRef=useRef()
    function Searching(){
        dispatch(CartAction.handelSearch([inputRef.current.value , data]))
    }

    console.log(dataSearch)
    return(
        
        <>
            {modalStatus==="OpenSearch" &&
            <Modal>
                <div className="Search">
                    <span>
                        <input ref={inputRef}  type="search" placeholder="Search…"/>
                        <button onClick={()=>Searching()}>Search</button>
                    </span>
                    <div>
                        {dataSearch[0]!=="food not found!" ? dataSearch.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <img src={item.image}/>
                                    <h5>{item.name}</h5>
                                    <p className="meal-item-price">{item.price+" $"}</p>
                                    <button onClick={()=>dispatch(CartAction.addCart(item))}>Add to Cart</button>
                                </li>
                            )
                        }) : <h1>{dataSearch}</h1>}
                    </div>
                </div>
                <div className="buttons">
                    <button className="close" onClick={()=>dispatch(ModalAction.closing())}>Close</button>
                </div>
            </Modal>

            }
        </>
    )
}