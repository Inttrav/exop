'use client';

import { useState } from 'react';
import NightSkyBackground from '@/components/NightSkyBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Features() {
  const [activeTab, setActiveTab] = useState('trading');

  const features = {
    trading: [
      {
        title: "Advanced Trading Tools",
        description: "Access professional-grade trading tools with real-time market data and advanced charting capabilities.",
        icon: "📊",
        details: [
          "Real-time market data and analytics",
          "Advanced technical indicators",
          "Customizable trading interface",
          "Multiple order types"
        ]
      },
      {
        title: "AI-Powered Insights",
        description: "Leverage our cutting-edge AI algorithms for market analysis and trading recommendations.",
        icon: "🤖",
        details: [
          "Market trend prediction",
          "Risk assessment",
          "Portfolio optimization",
          "Smart order routing"
        ]
      },
      {
        title: "Risk Management",
        description: "Comprehensive risk management tools to protect your investments.",
        icon: "🛡️",
        details: [
          "Stop-loss orders",
          "Position sizing",
          "Portfolio diversification",
          "Risk analytics"
        ]
      },
      {
        title: "Automated Trading",
        description: "Set up and run automated trading strategies with ease.",
        icon: "⚡",
        details: [
          "Custom strategy builder",
          "Backtesting capabilities",
          "Real-time execution",
          "Performance monitoring"
        ]
      },
      {
        title: "Market Research",
        description: "Access comprehensive market research and analysis tools.",
        icon: "🔍",
        details: [
          "Fundamental analysis",
          "Technical analysis",
          "Market sentiment analysis",
          "Economic calendar"
        ]
      },
      {
        title: "Social Trading",
        description: "Learn from and copy successful traders in our community.",
        icon: "👥",
        details: [
          "Copy trading",
          "Performance tracking",
          "Community insights",
          "Trading leaderboards"
        ]
      }
    ],
    security: [
      {
        title: "Bank-Grade Security",
        description: "Your assets are protected with enterprise-level security measures.",
        icon: "🔒",
        details: [
          "Multi-factor authentication",
          "Cold storage for assets",
          "Regular security audits",
          "Insurance coverage"
        ]
      },
      {
        title: "Privacy Protection",
        description: "Your data is encrypted and protected with the latest security protocols.",
        icon: "👁️",
        details: [
          "End-to-end encryption",
          "Data privacy controls",
          "Secure API access",
          "Regular backups"
        ]
      }
    ],
    platform: [
      {
        title: "Cross-Platform Access",
        description: "Trade from any device with our responsive platform.",
        icon: "💻",
        details: [
          "Web trading platform",
          "Mobile app",
          "Desktop application",
          "API access"
        ]
      },
      {
        title: "24/7 Support",
        description: "Get help whenever you need it with our round-the-clock support team.",
        icon: "🎧",
        details: [
          "Live chat support",
          "Email support",
          "Phone support",
          "Community forums"
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen relative">
      <NightSkyBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for <span className="text-blue-400">Smart Trading</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the tools and capabilities that make Exop the preferred choice for traders worldwide.
          </p>
        </section>

        {/* Feature Tabs */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            {['trading', 'security', 'platform'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features[activeTab as keyof typeof features].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are already using Exop's powerful platform.
          </p>
          <Link href="/auth/register" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block">
            Get Started Now
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
} 