import { useState } from 'react'
import MerchantHeader from './components/MerchantHeader'
import OfferList from './components/OfferList'
import { mockMerchant, mockOffers } from './data/mockData'

export default function App() {
  const [offers, setOffers] = useState(mockOffers)

  const handleAccept = (offerId) => {
    setOffers(offers.map(offer =>
      offer.id === offerId ? { ...offer, status: 'accepted' } : offer
    ))
  }

  const handleDecline = (offerId) => {
    setOffers(offers.map(offer =>
      offer.id === offerId ? { ...offer, status: 'declined' } : offer
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MerchantHeader merchant={mockMerchant} />
        <OfferList
          offers={offers}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      </div>
    </div>
  )
}
