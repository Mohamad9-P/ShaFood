export default function FullOrders({data,removeItem}){
    function handelRemove(id){
        const issure=window.confirm("Are you sure to remove this food?")
        if(issure){
            removeItem(id)
        }
    }
    return(
        <div>
            {data.length > 0 && data.map((items,index)=>{
                return(
                    <div className="orderbord" key={index}>
                                <img src={items.image} />
                               <div key={items.id} className="orderlist">
                                    <li>{items.name}</li>
                                    <p>*  {items.Selected}</p>
                                    <h3>{items.price*items.Selected}$</h3>
                                    <button onClick={()=>handelRemove(items.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                               </div>
                    </div>
                )
            })}
        </div>
    )
}