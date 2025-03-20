# Reverse Budgeting App Deployment Guide

## Project Structure
```
exop/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   ├── components/      # Reusable components
│   │   ├── lib/            # Utilities and configs
│   │   └── types/          # TypeScript types
│   ├── public/             # Static files
│   └── vercel.json         # Vercel deployment config
│
├── backend/                 # Supabase backend
│   ├── functions/          # Edge functions
│   ├── migrations/         # Database migrations
│   └── seed/              # Seed data
│
└── supabase/              # Supabase configs
    └── config.toml        # Supabase project config
```

## Deployment Steps

### 1. Frontend Deployment (Vercel)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Configure environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. Deploy!

### 2. Backend Deployment (Supabase)
1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key
4. Run database migrations:
   ```bash
   cd backend
   supabase db push
   ```
5. Deploy edge functions:
   ```bash
   supabase functions deploy
   ```

### 3. Environment Setup
1. Create `.env.local` in frontend:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. Create `.env` in backend:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   HDFC_API_KEY=your_hdfc_api_key
   ```

## Development Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Database Schema
```sql
-- Users table (handled by Supabase Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade,
  email text,
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Transactions table
create table public.transactions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  amount decimal not null,
  category text,
  description text,
  date timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Budgets table
create table public.budgets (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  category text,
  amount decimal not null,
  spent decimal default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Investments table
create table public.investments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  name text,
  type text,
  amount decimal not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## API Routes
- `/api/auth/*` - Authentication endpoints
- `/api/transactions/*` - Transaction management
- `/api/budgets/*` - Budget management
- `/api/investments/*` - Investment suggestions

## Security
- Row Level Security (RLS) enabled on all tables
- JWT authentication for API routes
- Environment variables for sensitive data
- CORS configured for production domains

## Monitoring
- Vercel Analytics for frontend
- Supabase Dashboard for backend
- Error tracking with Sentry (optional)
