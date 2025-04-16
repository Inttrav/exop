"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import {
  Home,
  LineChart,
  PiggyBank,
  Settings,
  BookOpen,
  Wallet,
  TrendingUp,
  HelpCircle,
  LayoutDashboard,
  Receipt,
  PieChart
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { name: 'Transactions', href: '/transactions', icon: <Receipt className="h-5 w-5" /> },
  { name: 'Investments', href: '/investments', icon: <TrendingUp className="h-5 w-5" /> },
  { name: 'Savings', href: '/savings', icon: <PiggyBank className="h-5 w-5" /> },
  { name: 'Portfolio', href: '/portfolio', icon: <PieChart className="h-5 w-5" /> },
  { name: 'Learn', href: '/learn', icon: <BookOpen className="h-5 w-5" /> },
  { name: 'Settings', href: '/settings', icon: <Settings className="h-5 w-5" /> },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-card overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-2xl font-bold text-primary">SmartBudget</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-border p-4">
            <Button variant="outline" className="w-full">
              <HelpCircle className="h-5 w-5 mr-2" />
              Get Help
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 