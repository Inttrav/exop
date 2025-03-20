'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      // Handle auth state changes without redirecting
      console.log('Auth state changed:', _event);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
