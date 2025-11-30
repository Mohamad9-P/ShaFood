import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/Modal-Slice.jsx";
import Slider from "./Slider.jsx";

export function Header(){
    const dispatch=useDispatch()
    const cartData=useSelector(store=>store.Carts.CartMeals)
    const FoodLengthAdd=cartData.length!==0 ? cartData.reduce((acc,item)=>{
        return acc + item.Selected
    },0):0;

    return(
        <div id="Crosure">
            <div id="main-header">
                <div id="title">
                    <img src="logo.jpg"/>
                    <h1>ShaFood</h1>
                    </div>
                    <div className="main-header-buttons">
                        
                        <button onClick={()=>dispatch(ModalAction.opening("OpenOrders"))} className='yellowbutton'>Orders</button>
                        <button onClick={()=>dispatch(ModalAction.opening("add"))} className='yellowbutton'>ShopCart{cartData.length > 1 && "s"}({FoodLengthAdd})</button>
                        <button onClick={()=>dispatch(ModalAction.opening("OpenSearch"))} className='yellowbutton'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="27px" fill="rgba(56, 56, 56, 0.898)"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>    
                            Search
                        </button>
                    </div>
                </div>
                    <img src="berger.png" alt="" className="icon berger" />
                    <img src="mac.png" alt="" className="icon mac" />
                    <img src="pizza.png" alt="" className="icon pizza" />
                    <img src="taco.png" alt="" className="icon taco" />
                    <img src="hotdog.png" alt="" className="icon hotdog" />
                    <img src='douth.png' className='icon douth'/>
            
            <div className="center-header">
                    <div>
                        <div className="description">
                            <h1><span>Delicious</span></h1>
                            <h1>FOOD</h1>
                            <p>
                                Discover a world of delicious and diverse flavors! Transform every meal into an unforgettable experience with our fresh, high-quality dishes.
                            </p>
                            <button  className='yellowbutton about' onClick={()=>dispatch(ModalAction.opening("About"))} >About</button>
                        </div>
                </div>
                <Slider/>
            </div>

        </div>
    )
}