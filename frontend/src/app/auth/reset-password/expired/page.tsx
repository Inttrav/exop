'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordExpired() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Content */}
      <div className="relative w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Reset Link Expired
          </h2>
          <p className="text-gray-400">
            This password reset link has expired
          </p>
        </div>

        {/* Expired Message */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <div className="space-y-6">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              Password reset links expire after 24 hours for security reasons.
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                Please request a new password reset link to continue.
              </p>

              <button
                onClick={() => router.push('/auth/forgot-password')}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-medium shadow-lg shadow-blue-500/20"
              >
                Request New Reset Link
              </button>

              <p className="text-center text-sm text-gray-400">
                Remember your password?{' '}
                <Link 
                  href="/auth/login" 
                  className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 