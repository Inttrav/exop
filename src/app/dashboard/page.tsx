'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import QuickActions from '@/components/QuickActions';
import LiveTransactions from '@/components/LiveTransactions';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        router.push('/auth/login');
      }
    };
    checkUser();
  }, [router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white">
              Welcome back, {user.email}
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Your intelligent financial management companion
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LiveTransactions />
            </div>
            <div className="space-y-8">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 