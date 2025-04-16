"use client";

import Link from 'next/link';

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="space-y-3">
          <Link
            href="/investments"
            className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Investment Opportunities
          </Link>
          <Link
            href="/budgets"
            className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Manage Budgets
          </Link>
          <Link
            href="/reports"
            className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
} 