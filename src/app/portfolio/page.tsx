'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface Asset {
  name: string;
  value: number;
  color: string;
}

const COLORS = ['#64ffda', '#4facfe', '#ffd700', '#ff6b6b', '#a78bfa'];

export default function PortfolioPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setAssets([
        { name: 'Stocks', value: 40, color: COLORS[0] },
        { name: 'Bonds', value: 30, color: COLORS[1] },
        { name: 'Real Estate', value: 15, color: COLORS[2] },
        { name: 'Commodities', value: 10, color: COLORS[3] },
        { name: 'Cash', value: 5, color: COLORS[4] },
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground">View your asset allocation and performance</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={assets}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {assets.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Total Value</p>
                    <p className="text-2xl font-bold">$125,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">YTD Return</p>
                    <p className="text-2xl font-bold text-green-500">+12.5%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Risk Level</p>
                    <p className="text-2xl font-bold">Moderate</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Sharpe Ratio</p>
                    <p className="text-2xl font-bold">1.25</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Asset Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-muted">
                  <tr>
                    <th className="px-6 py-3">Asset Class</th>
                    <th className="px-6 py-3">Allocation</th>
                    <th className="px-6 py-3">Value</th>
                    <th className="px-6 py-3">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <tr key={asset.name} className="border-b border-border">
                      <td className="px-6 py-4 font-medium">{asset.name}</td>
                      <td className="px-6 py-4">{asset.value}%</td>
                      <td className="px-6 py-4">${(125000 * (asset.value / 100)).toLocaleString()}</td>
                      <td className="px-6 py-4 text-green-500">+{(Math.random() * 10 + 5).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 