export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  date: string;
  created_at: string;
}

export interface Investment {
  id: string;
  user_id: string;
  name: string;
  type: string;
  amount: number;
  return_percentage: number | null;
  start_date: string;
  created_at: string;
}

export interface UserSettings {
  id: string;
  user_id: string;
  currency: string;
  theme: 'light' | 'dark';
  notifications_enabled: boolean;
  created_at: string;
  updated_at: string;
} 