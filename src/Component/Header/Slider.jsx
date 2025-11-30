import { data } from "../../data.js";
import { useEffect, useState } from "react";
export default function Slider(){
const [slider,setslider]=useState(0)
    function increase(){
        setslider(prev=>prev+1)
        if(slider===data.length - 1){
            setslider(0)
        }
    }
    function decrease(){
        setslider(prev=>prev-1)
        console.log(slider)
        if(slider < 1){
            setslider(data.length -1)
        }
    }

    useEffect(()=>{
        const timer=setInterval(()=>{
            setslider(prev=>(prev+1) % data.length)

        },5000)
        return()=> {clearInterval(timer)}

    },[data.length])
    return(
            <section className="slider">
                {/* <img className="berger" src="berger.png"/> */}
                <img className="image" src={data[slider].image}/>
                <div className="NextOrPrev">
                    <button onClick={()=>decrease()} className="prevB"><img src="next.png" alt="" /></button>
                    <button onClick={()=>increase()}><img src="next.png" alt="hello" /></button>
                </div>
            </section>        
    )
}

