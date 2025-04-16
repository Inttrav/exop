"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Investment {
  id: string;
  name: string;
  type: string;
  amount: number;
  return: number;
  date: string;
}

export default function Investments() {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }
      fetchInvestments();
    };

    checkAuth();
  }, [router, supabase.auth]);

  const fetchInvestments = async () => {
    try {
      const { data, error } = await supabase
        .from('investments')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setInvestments(data || []);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-1/4 mb-4"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-800 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Investment Portfolio</h1>
          <p className="text-gray-400 mt-2">Track and manage your investments</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => (
            <div
              key={investment.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {investment.name}
              </h3>
              <p className="text-gray-400 mb-4">{investment.type}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount</span>
                  <span className="text-white">₹{investment.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Return</span>
                  <span className={`${investment.return >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {investment.return >= 0 ? '+' : ''}{investment.return}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white">
                    {new Date(investment.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {investments.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-400">No investments found</p>
          </div>
        )}
      </div>
    </div>
  );
} 