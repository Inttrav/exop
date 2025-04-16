# Reverse Budgeting - Project Plan

## Project Overview
A modern financial management application with a focus on reverse budgeting, investment tracking, and real-time analytics.

## Tech Stack
- Frontend: Next.js 14+ with TypeScript
- UI: Tailwind CSS, Shadcn/ui
- Database: Supabase
- Authentication: Supabase Auth
- Real-time: Supabase Realtime
- Charts: Recharts or Chart.js
- Animations: Framer Motion

## Core Features

### 1. Authentication & User Management
- [ ] Email/Password Authentication
- [ ] Social Auth (Google, GitHub)
- [ ] Email Verification
- [ ] Password Reset
- [ ] User Profile Management

### 2. Dashboard
- [ ] Overview Cards
  - [ ] Total Balance
  - [ ] Monthly Income
  - [ ] Monthly Expenses
  - [ ] Investment Portfolio Value
- [ ] Recent Transactions
- [ ] Spending Categories
- [ ] Budget Progress
- [ ] Investment Performance

### 3. Transactions
- [ ] Transaction List
- [ ] Transaction Categories
- [ ] Transaction Search & Filter
- [ ] Transaction Import (CSV, Bank API)
- [ ] Recurring Transactions
- [ ] Transaction Rules

### 4. Budgeting
- [ ] Reverse Budgeting System
- [ ] Category Budgets
- [ ] Budget Alerts
- [ ] Budget Reports
- [ ] Budget Templates

### 5. Investments
- [ ] Investment Portfolio
- [ ] Stock/Mutual Fund Tracking
- [ ] Real-time Price Updates
- [ ] Investment Performance
- [ ] Investment Goals

### 6. Analytics
- [ ] Spending Trends
- [ ] Income vs Expenses
- [ ] Category Analysis
- [ ] Investment Returns
- [ ] Custom Reports

### 7. Settings & Preferences
- [ ] User Preferences
- [ ] Notification Settings
- [ ] Category Management
- [ ] Account Settings
- [ ] Data Export/Import

## Database Schema (Supabase)

### Tables
1. `profiles`
   - id (uuid)
   - user_id (uuid)
   - full_name (text)
   - avatar_url (text)
   - created_at (timestamp)
   - updated_at (timestamp)

2. `transactions`
   - id (uuid)
   - user_id (uuid)
   - amount (numeric)
   - type (enum: income/expense)
   - category_id (uuid)
   - description (text)
   - date (timestamp)
   - created_at (timestamp)
   - updated_at (timestamp)

3. `categories`
   - id (uuid)
   - user_id (uuid)
   - name (text)
   - type (enum: income/expense)
   - icon (text)
   - color (text)
   - created_at (timestamp)
   - updated_at (timestamp)

4. `budgets`
   - id (uuid)
   - user_id (uuid)
   - category_id (uuid)
   - amount (numeric)
   - period (enum: monthly/yearly)
   - start_date (timestamp)
   - end_date (timestamp)
   - created_at (timestamp)
   - updated_at (timestamp)

5. `investments`
   - id (uuid)
   - user_id (uuid)
   - type (enum: stock/mutual_fund/other)
   - symbol (text)
   - quantity (numeric)
   - purchase_price (numeric)
   - purchase_date (timestamp)
   - created_at (timestamp)
   - updated_at (timestamp)

6. `investment_prices`
   - id (uuid)
   - investment_id (uuid)
   - price (numeric)
   - date (timestamp)
   - created_at (timestamp)

## API Requirements

### Supabase Tables
- Authentication
- Real-time subscriptions
- Row Level Security (RLS)
- Storage for user uploads

### External APIs
1. Stock Market Data
   - Yahoo Finance API
   - Alpha Vantage
   - IEX Cloud

2. Bank Integration
   - Plaid API
   - Yodlee API

3. Currency Exchange
   - Exchange Rates API
   - Open Exchange Rates

## UI/UX Requirements
- Modern, clean design
- Dark/Light mode
- Responsive layout
- Smooth animations
- Loading states
- Error handling
- Toast notifications
- Form validation
- Data visualization
- Interactive charts

## Development Phases

### Phase 1: Foundation
- [ ] Project setup
- [ ] Authentication
- [ ] Basic dashboard
- [ ] Transaction management

### Phase 2: Core Features
- [ ] Budgeting system
- [ ] Investment tracking
- [ ] Analytics
- [ ] Reports

### Phase 3: Advanced Features
- [ ] Bank integration
- [ ] Real-time updates
- [ ] Advanced analytics
- [ ] Mobile optimization

### Phase 4: Polish
- [ ] Performance optimization
- [ ] UI/UX improvements
- [ ] Testing
- [ ] Documentation

## Getting Started
1. Clone repository
2. Install dependencies
3. Set up Supabase project
4. Configure environment variables
5. Run development server

## Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_YAHOO_FINANCE_API_KEY=your_yahoo_finance_api_key
NEXT_PUBLIC_PLAID_CLIENT_ID=your_plaid_client_id
NEXT_PUBLIC_PLAID_SECRET=your_plaid_secret
``` 