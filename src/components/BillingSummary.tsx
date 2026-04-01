import type { BillSummary } from "../types";
import { SpecialOffers } from '../utils/Pricing'
type BillSummaryProps = {
  billSummary: BillSummary 
//   formatCurrency: (amount: number) => string
}

function BillingSummary({ billSummary }: BillSummaryProps){

    return(<>
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
 <h2 className="mb-3 text-lg font-semibold text-slate-900">Bill Summary</h2>
    <p className="mb-2 text-sm font-semibold text-slate-800">Special offers table</p>
      <ul className="mb-4 space-y-2">
        {SpecialOffers?.map((offer,index) => (
          <li key={index} className="rounded-lg border border-slate-100 p-3">
            <p className="font-medium text-slate-900">{offer.title}</p>
            <p className="text-sm text-slate-600">{offer.description}</p>
          </li>
        ))}
      </ul>

      <p className="mb-2 text-sm font-semibold text-slate-800">Applied offers and savings</p>
      {billSummary.appliedOffers.length === 0 ? (
        <p className="mb-4 italic text-slate-500">No special offers applied.</p>
      ) : (
        <ul className="mb-4 space-y-2">
          {billSummary.appliedOffers.map((offer) => (
            <li key={offer.id} className="flex items-center justify-between rounded-md border border-emerald-100 bg-emerald-50 px-3 py-2">
              <span>{offer.title}</span>
              <strong className="text-emerald-700">- {(offer.savings)}</strong>
            </li>
          ))}
        </ul>
      )}

      <ul className="space-y-2 border-t border-slate-200 pt-3">
        <li className="flex items-center justify-between">
          <span>Subtotal before special offer</span>
          <strong>{(billSummary.subtotalBeforeOffers)}</strong>
        </li>
        <li className="flex items-center justify-between">
          <span>Total savings</span>
          <strong className="text-emerald-700">- {(billSummary.totalSavings)}</strong>
        </li>
        <li className="flex items-center justify-between border-t border-slate-200 pt-2 text-base font-semibold text-slate-900">
          <span>Final total with savings applied</span>
          <strong>{(billSummary.finalTotal)}</strong>
        </li>
      </ul>
    </div>
    </>)
}

export default BillingSummary;