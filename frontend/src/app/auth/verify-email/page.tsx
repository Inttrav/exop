'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      const type = searchParams.get('type');

      if (!token || type !== 'signup') {
        setError('Invalid verification link');
        setLoading(false);
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'signup',
        });

        if (error) throw error;
        setSuccess(true);
        setTimeout(() => router.push('/auth/login'), 2000);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Content */}
      <div className="relative w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Verify Email
          </h2>
          <p className="text-gray-400">
            Verifying your email address...
          </p>
        </div>

        {/* Verification Status */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          {loading && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-400">Verifying your email...</p>
            </div>
          )}

          {error && (
            <div className="space-y-4">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {error}
              </div>
              <p className="text-center text-sm text-gray-400">
                Need help?{' '}
                <Link 
                  href="/auth/login" 
                  className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Contact support
                </Link>
              </p>
            </div>
          )}

          {success && (
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                Email verified successfully! Redirecting to login...
              </div>
              <p className="text-center text-sm text-gray-400">
                Didn't get redirected?{' '}
                <Link 
                  href="/auth/login" 
                  className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Click here
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 