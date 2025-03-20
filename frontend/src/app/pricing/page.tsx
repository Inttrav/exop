'use client';

import { useState } from 'react';
import NightSkyBackground from '@/components/NightSkyBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: { monthly: 9.99, annual: 99.99 },
      description: "Perfect for beginners starting their trading journey",
      features: [
        "Basic market data",
        "Standard trading tools",
        "Email support",
        "Basic analytics",
        "Up to 10 watchlists",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: { monthly: 29.99, annual: 299.99 },
      description: "Advanced features for serious traders",
      features: [
        "Advanced market data",
        "Premium trading tools",
        "Priority support",
        "Advanced analytics",
        "Unlimited watchlists",
        "API access",
        "Custom indicators",
        "Portfolio tracking"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: 99.99, annual: 999.99 },
      description: "Complete solution for professional traders",
      features: [
        "Real-time market data",
        "All trading tools",
        "24/7 dedicated support",
        "Advanced analytics",
        "Unlimited watchlists",
        "Full API access",
        "Custom indicators",
        "Portfolio tracking",
        "Dedicated account manager",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <main className="min-h-screen relative">
      <NightSkyBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="text-blue-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your trading needs. All plans include our core features.
          </p>
        </section>

        {/* Pricing Toggle */}
        <section className="max-w-6xl mx-auto px-4 mb-12">
          <div className="flex justify-center items-center space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-blue-500' : 'bg-gray-700'
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                  isAnnual ? 'left-9' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-green-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 scale-105'
                    : 'border-gray-700/50 hover:border-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-20 px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all paid plans come with a 14-day free trial. No credit card required."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 