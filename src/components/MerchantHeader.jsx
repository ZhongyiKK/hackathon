export default function MerchantHeader({ merchant }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{merchant.logo}</span>
            <h1 className="text-3xl font-bold text-gray-900">{merchant.name}</h1>
          </div>
          <p className="text-gray-600">AI-Powered Offer Recommendations</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {merchant.objectives.map(obj => (
            <div
              key={obj.id}
              className={`p-4 rounded-lg border-2 ${
                obj.priority === 'high'
                  ? 'border-red-300 bg-red-50'
                  : 'border-yellow-300 bg-yellow-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{obj.title}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  obj.priority === 'high'
                    ? 'bg-red-200 text-red-800'
                    : 'bg-yellow-200 text-yellow-800'
                }`}>
                  {obj.priority.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-700">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
