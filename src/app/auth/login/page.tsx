import LoginForm from '../../../components/LoginForm';

export default function LoginPage() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <LoginForm />

          {/* Sign up link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="/auth/register" className="font-medium text-blue-500 hover:text-blue-400 transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 