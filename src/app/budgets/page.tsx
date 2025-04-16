"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
  period: string;
}

export default function Budgets() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
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
      fetchBudgets();
    };

    checkAuth();
  }, [router, supabase.auth]);

  const fetchBudgets = async () => {
    try {
      const { data, error } = await supabase
        .from('budgets')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      setBudgets(data || []);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProgressColor = (spent: number, amount: number) => {
    const percentage = (spent / amount) * 100;
    if (percentage >= 100) return 'bg-red-500';
    if (percentage >= 80) return 'bg-yellow-500';
    return 'bg-green-500';
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
          <h1 className="text-3xl font-bold text-white">Budget Management</h1>
          <p className="text-gray-400 mt-2">Track and manage your spending</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.amount) * 100;
            return (
              <div
                key={budget.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {budget.category}
                  </h3>
                  <span className="text-gray-400">{budget.period}</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Spent</span>
                    <span className="text-white">
                      ₹{budget.spent.toLocaleString()} / ₹{budget.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${getProgressColor(budget.spent, budget.amount)} h-2 rounded-full`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="text-sm">
                  <span className={`${percentage >= 100 ? 'text-red-500' : 'text-green-500'}`}>
                    {percentage >= 100 ? 'Over budget' : `${Math.round(percentage)}% of budget used`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {budgets.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-400">No budgets found</p>
          </div>
        )}
      </div>
    </div>
  );
} 