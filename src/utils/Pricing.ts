import type { AppliedOffer, BillSummary, CartItem, SpecialOffer } from '../types'

export const SpecialOffers: SpecialOffer[] = [
  {
    id: 'rice-2plus-5pct',
    title: 'Rice Combo Discount',
    description: 'Buy 2 or more Rice Bags (5kg) and get 5% off.',
  },
  {
    id: 'oil-bread-flat-30',
    title: 'Oil + Bread Offer',
    description: 'Buy Cooking Oil and Bread together to save Rs. 30.',
  },
  {
    id: 'cart-1000-8pct',
    title: 'Cart Value Offer',
    description: 'Spend Rs. 1000 or more and get 8% off your total.',
  },
]

export const getBillSummary = (items: CartItem[]): BillSummary => {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const appliedOffers: AppliedOffer[] = []

  const riceItem = items.find(item => item.name === 'Rice Bag (5kg)')
  if (riceItem && riceItem.quantity >= 2) {
    const savings = riceItem.price * riceItem.quantity * 0.05

    appliedOffers.push({
      id: 'rice-2plus-5pct',
      title: 'Rice Combo Discount',
      savings,
    })
  }

  const hasOil = items.some(item => item.name === 'Cooking Oil (1L)')
  const hasBread = items.some(item => item.name === 'Bread')

  if (hasOil && hasBread) {
    appliedOffers.push({
      id: 'oil-bread-flat-30',
      title: 'Oil + Bread Offer',
      savings: 30,
    })
  }

  if (subtotal >= 1000) {
    const savings = subtotal * 0.08

    appliedOffers.push({
      id: 'cart-1000-8pct',
      title: 'Cart Value Offer',
      savings,
    })
  }

  const totalSavings = appliedOffers.reduce(
    (total, offer) => total + offer.savings,
    0
  )

  const finalTotal = Math.max(0, subtotal - totalSavings)

  return {
    subtotalBeforeOffers: subtotal,
    appliedOffers,
    totalSavings,
    finalTotal,
  }
}