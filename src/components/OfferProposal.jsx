export default function OfferProposal({ offer, onAccept, onDecline }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-50 border-green-300'
      case 'declined':
        return 'bg-gray-50 border-gray-300'
      default:
        return 'bg-white border-gray-200'
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'accepted':
        return { text: '✓ Accepted', color: 'bg-green-100 text-green-800' }
      case 'declined':
        return { text: '✗ Declined', color: 'bg-gray-100 text-gray-800' }
      default:
        return null
    }
  }

  const badge = getStatusBadge(offer.status)

  return (
    <div className={`border-2 rounded-lg p-6 mb-4 transition-all duration-300 ${getStatusColor(offer.status)}`}>
      {/* Header with title and status */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{offer.title}</h3>
          <p className="text-sm text-gray-600">
            Objective: <span className="font-semibold">{offer.objective.replace(/_/g, ' ').toUpperCase()}</span>
          </p>
        </div>
        {badge && (
          <span className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${badge.color}`}>
            {badge.text}
          </span>
        )}
      </div>

      {/* Recommendation reason */}
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-indigo-900">Why this offer: </span>
          {offer.reason}
        </p>
      </div>

      {/* Impact metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold mb-1">Estimated Impact</p>
          <p className="text-sm font-bold text-blue-900">{offer.estimatedImpact.metric}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold mb-1">Confidence Level</p>
          <p className="text-sm font-bold text-blue-900">{offer.estimatedImpact.confidence}</p>
        </div>
      </div>

      {/* Linked templates and benefits */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-xs text-gray-600 font-semibold mb-2">Associated Amex Resources</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-600">Template: </span>
            <span className="font-semibold text-gray-900">{offer.linkedTemplate.name}</span>
          </div>
          <div>
            <span className="text-gray-600">Benefit: </span>
            <span className="font-semibold text-gray-900">{offer.linkedBenefit.name}</span>
          </div>
        </div>
      </div>

      {/* Offer details */}
      <div className="bg-amber-50 p-4 rounded-lg mb-4">
        <p className="text-xs text-gray-600 font-semibold mb-2">Offer Details</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {Object.entries(offer.offerDetails).map(([key, value]) => (
            <div key={key}>
              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
              <span className="font-semibold text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      {offer.status === 'pending' && (
        <div className="flex gap-3">
          <button
            onClick={() => onAccept(offer.id)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            ✓ Accept Offer
          </button>
          <button
            onClick={() => onDecline(offer.id)}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            ✗ Decline
          </button>
        </div>
      )}

      {offer.status === 'accepted' && (
        <div className="bg-green-100 border-2 border-green-400 p-4 rounded-lg text-center">
          <p className="text-green-900 font-bold">✓ Offer Accepted</p>
          <p className="text-sm text-green-800 mt-1">This offer is now active for your members</p>
        </div>
      )}

      {offer.status === 'declined' && (
        <div className="bg-gray-100 border-2 border-gray-400 p-4 rounded-lg text-center">
          <p className="text-gray-900 font-bold">✗ Offer Declined</p>
          <p className="text-sm text-gray-800 mt-1">You can accept this offer later if you change your mind</p>
        </div>
      )}
    </div>
  )
}
