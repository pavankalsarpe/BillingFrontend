import type { Product } from "../types";

type ProductListProps={
products : Product []
 onAddClickCart:(product:Product)=>void
// formatCurrency:(amount:number)=>string
}


function ProductList({products,onAddClickCart}:ProductListProps){

console.log(products)
    return(
        <>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Product List</h2>
            <ul className="space-y-3">
{products?.map((product,index)=>(
<li key={index} className="flex item-center justify-between gap-3 rounded-lg border border-slate-100 p-3">

<div>
              <p className="font-medium text-slate-900">{product.name}</p>
              <p className="text-sm text-slate-600">{(product.price)}</p>
            </div>
            <button
              className="rounded-md border border-violet-300 bg-violet-100 px-3 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-200"
               onClick={() => onAddClickCart(product)}
            >
              Add to cart
            </button>
</li>
))}
            </ul>
        </div>
        
        </>
    )
}

export default ProductList;