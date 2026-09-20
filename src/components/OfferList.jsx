import OfferProposal from './OfferProposal'

export default function OfferList({ offers, onAccept, onDecline }) {
  const pendingCount = offers.filter(o => o.status === 'pending').length
  const acceptedCount = offers.filter(o => o.status === 'accepted').length
  const declinedCount = offers.filter(o => o.status === 'declined').length

  return (
    <div>
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-semibold mb-1">Pending</p>
          <p className="text-3xl font-bold text-blue-600">{pendingCount}</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-semibold mb-1">Accepted</p>
          <p className="text-3xl font-bold text-green-600">{acceptedCount}</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gray-500">
          <p className="text-gray-600 text-sm font-semibold mb-1">Declined</p>
          <p className="text-3xl font-bold text-gray-600">{declinedCount}</p>
        </div>
      </div>

      {/* Offers section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Generated Offer Recommendations</h2>

        {pendingCount > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Review & Decide</h3>
            {offers
              .filter(offer => offer.status === 'pending')
              .map(offer => (
                <OfferProposal
                  key={offer.id}
                  offer={offer}
                  onAccept={onAccept}
                  onDecline={onDecline}
                />
              ))}
          </div>
        )}

        {acceptedCount > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-green-700 mb-4">✓ Accepted Offers</h3>
            {offers
              .filter(offer => offer.status === 'accepted')
              .map(offer => (
                <OfferProposal
                  key={offer.id}
                  offer={offer}
                  onAccept={onAccept}
                  onDecline={onDecline}
                />
              ))}
          </div>
        )}

        {declinedCount > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-4">✗ Declined Offers</h3>
            {offers
              .filter(offer => offer.status === 'declined')
              .map(offer => (
                <OfferProposal
                  key={offer.id}
                  offer={offer}
                  onAccept={onAccept}
                  onDecline={onDecline}
                />
              ))}
          </div>
        )}

        {offers.length === 0 && (
          <p className="text-gray-500 text-center py-8">No offers available</p>
        )}
      </div>
    </div>
  )
}
