import type { CartItem } from "../types"

type CartProps = {
  cart: CartItem[]
  onIncreaseQuantity: (productId: number) => void
  onDecreaseQuantity: (productId: number) => void
//   formatCurrency: (amount: number) => string
}
function Cart({
  cart,
  onIncreaseQuantity,
  onDecreaseQuantity,
//   formatCurrency,
}: CartProps){
    return(

        <>
        <div className="rounded-xl border border-slate-200 p-4 bg-white shadow-sm">
<h2 className="mb-3 text-lg font-semibold text-slate-900">Cart</h2>
        {cart.length === 0 ? (
        <p className="italic text-slate-500">No items selected yet.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3">
              <div>
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">
                  {(item.price)} x {item.quantity}
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <button
                  className="h-8 w-8 rounded-md border border-violet-300 bg-violet-100 text-violet-700 transition hover:bg-violet-200"
                  onClick={() => onDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="min-w-5 text-center font-medium">{item.quantity}</span>
                <button
                  className="h-8 w-8 rounded-md border border-violet-300 bg-violet-100 text-violet-700 transition hover:bg-violet-200"
                  onClick={() => onIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
        </div>
        
        </>
    )
}

export default Cart;