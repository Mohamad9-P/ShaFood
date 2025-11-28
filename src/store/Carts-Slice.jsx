import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

export const cartData=createSlice({
    name:"Data",
    initialState:{CartMeals:[],CartOrders:[],Search:"" , dataSearch:[]},
    reducers:{

        addCart(state,action){
            let cart=[...state.CartMeals]
            const cartindex=cart.findIndex(prev=>prev.id===action.payload.id)
            if(cartindex!==-1){
                const update={
                    ...action.payload,
                    Selected:cart[cartindex].Selected+1,
                }
                cart[cartindex]=update
            }else if(cartindex===-1){
                cart.push({
                    ...action.payload,
                    Selected:1
                })
            }
            state.CartMeals=cart
        },
        removeCart(state,action){
            let carts=[...state.CartMeals]
           const index=state.CartMeals.findIndex(prev=>prev.id===action.payload.id) 

            if(action.payload.Selected!==1){
                carts[index]={...action.payload,Selected:action.payload.Selected - 1}
            }else if(action.payload.Selected===1){
                carts=state.CartMeals.filter(prev=>prev.id!==action.payload.id)
            }

            state.CartMeals=carts;
        },
        addOrders(state,action){
            state.CartOrders=[...state.CartOrders,action.payload]
            state.CartMeals=[]
            
        },
        handelSearch(state,action){
            state.Search=action.payload[0]
            let updating=[...state.dataSearch]
            const nameMeals=action.payload[1].map(item=>item.name)
            const name=nameMeals.filter(item=>item.includes(action.payload[0]))
            if((name.length < 1 || updating.length < 1) && !action.payload[0]){
                  updating=["food not found!"]
                  
                }
            if((action.payload[0].length > 0 && name.length >1 )){
                updating=name.map(item=>action.payload[1].filter(data=>data.name===item)).flat(1)
              }
              console.log(updating)
              state.dataSearch=updating
        }

    }

})
export const CartAction=cartData.actions