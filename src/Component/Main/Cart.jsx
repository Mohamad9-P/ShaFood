
import { useDispatch } from "react-redux"
import { CartAction } from "../../store/Carts-Slice"
import { data } from "../../data"

export default function Cart(){
    const dispatch=useDispatch()
    return(
        <div id="meals">
            {data.map(prev=>{
                return(
                    <li key={prev.id} className="meal-item" onint>
                        <article>
                           
                            <img src={prev.image}/>
                            <h3>{prev.name}</h3>
                            <p className="meal-item-price">{prev.price+" $"}</p>
                            <p className="meal-item-description">{prev.description}</p>
                             <button onClick={()=>dispatch(CartAction.addCart(prev))}>Add to Cart</button>
                        </article>
                    </li>
                )
                })
            }
        </div>
    )
}