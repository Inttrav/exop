"use client";

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function VerifyEmail() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      const type = searchParams.get('type');

      if (!token || type !== 'email') {
        setStatus('error');
        setError('Invalid verification link');
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'email',
        });

        if (error) throw error;
        setStatus('success');
        
        // Redirect to dashboard after 3 seconds
        setTimeout(() => {
          router.push('/dashboard');
        }, 3000);
      } catch (error: any) {
        setStatus('error');
        setError(error.message);
      }
    };

    verifyEmail();
  }, [router, searchParams, supabase.auth]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Email Verification
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {status === 'loading' && (
            <div className="text-center">
              <p className="text-gray-300">Verifying your email...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center">
              <p className="text-green-500 mb-4">
                Email verified successfully! Redirecting to dashboard...
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <p className="text-red-500 mb-4">
                {error || 'Failed to verify email'}
              </p>
              <Link
                href="/auth/login"
                className="text-blue-500 hover:text-blue-400"
              >
                Return to login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 