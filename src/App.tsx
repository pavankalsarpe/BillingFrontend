
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import type { Product } from './types'
import type { AppDispatch } from './app/store'
import type { RootState } from "../src/app/store"
import { getBillSummary } from './utils/Pricing'
import { addToCart, decreaseQuantity, increaseQuantity } from './features/cart/CartSlice'
import BillingSummary from './components/BillingSummary'

const products: Product[] = [
  { id: 1, name: 'Rice Bag (5kg)', price: 320 },
  { id: 2, name: 'Cooking Oil (1L)', price: 180 },
  { id: 3, name: 'Milk Pack (1L)', price: 55 },
  { id: 4, name: 'Bread', price: 40 },
  { id: 5, name: 'Eggs (12 pcs)', price: 96 },
]
function App() {
  
 const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.cart.items)
  const totalItems = useSelector((state: RootState) => {
  let total = 0
  for (const item of state.cart.items) {
    total += item.quantity
  }
  return total
})

const billSummary = getBillSummary(cart)

  return (
    <>
<div className='mx-auto min-h-screen w-full max-w-7xl bg-slate-50 px-4 py-8 text-slate-800 md:px-8'>
  <header className='mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
    <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>Billing Dashboard</h1>
    <span className='w-fit rounded-full border border-violet-300 bg-violet-100 text-sm px-3 py-1 font-medium text-violet-700'>Items in cart: {totalItems}</span>
  </header>

<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
<ProductList products={products}
 onAddClickCart={(product) => dispatch(addToCart(product))} />
<Cart cart={cart} 
  onIncreaseQuantity={(productId) => dispatch(increaseQuantity(productId))}
          onDecreaseQuantity={(productId) => dispatch(decreaseQuantity(productId))}
></Cart>

<BillingSummary  billSummary={billSummary}></BillingSummary>
</div>
  </div>    
    </>
  )
}

export default App
