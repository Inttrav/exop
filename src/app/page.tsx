'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tight">
          Elevate Your Financial Future
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience the power of intelligent wealth management. Our cutting-edge platform combines 
          advanced analytics with personalized investment strategies to help you achieve your financial 
          goals with confidence and precision.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/register"
            className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Begin Your Journey
          </Link>
          <Link
            href="/auth/login"
            className="rounded-md border border-input bg-background px-6 py-3 text-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Access Your Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
} 