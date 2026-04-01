export type Product = {
  id: number
  name: string
  price: number
}
export type BillSummary = {
  subtotalBeforeOffers: number
  appliedOffers: AppliedOffer[]
  totalSavings: number
  finalTotal: number
}

export type AppliedOffer = {
  id: string
  title: string
  savings: number
}

export type CartItem = Product & {
  quantity: number
}

export type SpecialOffer = {
  id: string
  title: string
  description: string
}