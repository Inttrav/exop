'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NightSkyBackground from '@/components/NightSkyBackground';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Declare the window property type
declare global {
  interface Window {
    startCoinAnimation: (rect: DOMRect) => void;
  }
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const router = useRouter();

  const taglines = [
    "Transform your finances with AI-powered insights",
    "Smart budgeting that adapts to your lifestyle",
    "Save more, worry less with personalized strategies",
    "Your financial future starts here"
  ];

  useEffect(() => {
    // Simulate authentication check
    setIsAuthenticated(false);
    
    // Cycle through taglines
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleStartJourney = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    setButtonRect(rect);
    
    // Start the coin animation
    if (window.startCoinAnimation) {
      window.startCoinAnimation(rect);
    }
    
    // Set transition state
    setIsTransitioning(true);
    
    // Redirect after animation
    setTimeout(() => {
      router.push('/signup');
    }, 2000);
  };

  return (
    <main className="min-h-screen relative">
      <NightSkyBackground />
      <Navbar />
      
      <div className={`relative z-10 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-blue-400">Exop</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-out">
              {taglines[taglineIndex]}
            </p>
            <div className="space-x-4">
              {isAuthenticated ? (
                <Link 
                  href="/dashboard"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    href="/signin"
                    className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Sign In
                  </Link>
                  <button
                    onClick={handleStartJourney}
                    className={`px-8 py-3 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition-colors ${
                      isTransitioning ? 'animate-coin-rotate' : ''
                    }`}
                  >
                    Start Your Journey
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Exop?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Insights",
                  description: "Get personalized financial recommendations based on your spending patterns",
                  icon: "🤖"
                },
                {
                  title: "Smart Budgeting",
                  description: "Automatically categorize expenses and track your financial goals",
                  icon: "📊"
                },
                {
                  title: "Secure & Private",
                  description: "Your data is encrypted and protected with bank-level security",
                  icon: "🔒"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-gray-800/70 transition-colors"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">$2B+</div>
                <div className="text-gray-300">Trading Volume</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">500K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}


        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who are already managing their money smarter with Exop.
            </p>
            {!isAuthenticated && (
              <Link 
                href="/signup"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Now
              </Link>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
