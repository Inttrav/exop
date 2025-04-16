"use client";

import { useEffect, useState } from 'react';
import { Transaction, getRecentTransactions, getAccountBalance } from '../lib/hdfc-bank';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export default function LiveTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [txns, bal] = await Promise.all([
        getRecentTransactions(),
        getAccountBalance(),
      ]);
      setTransactions(txns);
      setBalance(bal);
      setLoading(false);
    };

    fetchData();

    // Set up WebSocket connection for real-time updates
    const ws = new WebSocket('wss://api-sandbox.hdfcbank.com/ws');
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'transaction.created') {
        setTransactions((prev) => [data.transaction, ...prev]);
        setBalance(data.newBalance);
      }
    };

    return () => {
      ws.close();
    };
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
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Live Transactions
          </h3>
          <div className="text-right">
            <p className="text-sm text-gray-500">Current Balance</p>
            <p className="text-xl font-semibold text-gray-900">
              ₹{balance.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {transaction.type === 'credit' ? (
                      <ArrowUpIcon className="h-6 w-6 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {transaction.category} • {new Date(transaction.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className={`text-sm font-medium ${
                        transaction.type === 'credit'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {transaction.type === 'credit' ? '+' : '-'}₹
                      {Math.abs(transaction.amount).toLocaleString()}
                    </span>
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