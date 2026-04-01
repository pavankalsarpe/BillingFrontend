import  { createSlice ,type PayloadAction} from "@reduxjs/toolkit"
import type { CartItem, Product} from "../../types"

type CartSatate ={
    items:CartItem[]
}

const initialState:CartSatate={
items:[],
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
reducers:{
    addToCart:(state,action:PayloadAction<Product>)=>{
        const existingItem=state.items.find((item)=>item.id === action.payload.id)
        if(existingItem){
            existingItem.quantity +=1
        return
        }
        state.items.push({...action.payload,quantity:1})
        
    },
      increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (!item) return

      item.quantity -= 1
      state.items = state.items.filter((entry) => entry.quantity > 0)
    },
}
})

export const { addToCart, increaseQuantity, decreaseQuantity } = CartSlice.actions
export default CartSlice.reducer