"use client";

import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

interface MutualFund {
  id: string;
  name: string;
  category: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  returns: number;
  minInvestment: number;
  rating: number;
}

const mutualFunds: MutualFund[] = [
  {
    id: '1',
    name: 'Blue Chip Growth Fund',
    category: 'Equity',
    riskLevel: 'Medium',
    returns: 12.5,
    minInvestment: 5000,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Conservative Income Fund',
    category: 'Debt',
    riskLevel: 'Low',
    returns: 7.2,
    minInvestment: 10000,
    rating: 4.2
  },
  {
    id: '3',
    name: 'Tech Innovation Fund',
    category: 'Equity',
    riskLevel: 'High',
    returns: 18.3,
    minInvestment: 10000,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Balanced Advantage Fund',
    category: 'Hybrid',
    riskLevel: 'Medium',
    returns: 10.8,
    minInvestment: 5000,
    rating: 4.3
  }
];

export default function SavingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mutual Funds</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mutualFunds.map((fund) => (
            <Card key={fund.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{fund.name}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{fund.category}</span>
                  <span>•</span>
                  <span className={`${
                    fund.riskLevel === 'Low' ? 'text-green-500' :
                    fund.riskLevel === 'Medium' ? 'text-yellow-500' :
                    'text-red-500'
                  }`}>
                    {fund.riskLevel} Risk
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Returns (1Y)</span>
                    <span className="font-semibold text-green-500">+{fund.returns}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min. Investment</span>
                    <span className="font-semibold">₹{fund.minInvestment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center">
                      <span className="font-semibold mr-1">{fund.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                    Invest Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 