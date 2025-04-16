"use client";

import { useEffect, useState } from 'react';
import { MutualFund, getTopMutualFunds } from '../lib/yahoo-finance';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export default function MutualFunds() {
  const [funds, setFunds] = useState<MutualFund[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunds = async () => {
      const data = await getTopMutualFunds();
      setFunds(data);
      setLoading(false);
    };

    fetchFunds();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded mb-2"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Top Performing Mutual Funds
        </h3>
        <div className="flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {funds.map((fund) => (
              <li key={fund.symbol} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {fund.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {fund.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm font-medium text-gray-900">
                      ₹{fund.nav.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      {fund.changePercent >= 0 ? (
                        <ArrowUpIcon className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4 text-red-500" />
                      )}
                      <span
                        className={`text-sm ${
                          fund.changePercent >= 0
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {Math.abs(fund.changePercent).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 