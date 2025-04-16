import { getSavingsInstruments, SavingsInstrument } from '../lib/yahoo-finance';

export default function SavingsInstruments() {
  const instruments = getSavingsInstruments();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Recommended Savings Instruments
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {instruments.map((instrument) => (
            <div
              key={instrument.name}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-1 min-w-0">
                <div className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {instrument.name}
                  </p>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      Interest Rate: {instrument.interestRate}%
                    </p>
                    <p className="text-sm text-gray-500">
                      Min Investment: ₹{instrument.minInvestment.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          instrument.riskLevel === 'Low'
                            ? 'bg-green-100 text-green-800'
                            : instrument.riskLevel === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {instrument.riskLevel} Risk
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {instrument.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 