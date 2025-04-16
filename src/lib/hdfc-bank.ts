export interface Transaction {
  id: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  category: string;
  timestamp: string;
  balance: number;
}

// This would be your HDFC Bank API key from their sandbox environment
const HDFC_API_KEY = process.env.HDFC_API_KEY;
const HDFC_API_BASE_URL = 'https://api-sandbox.hdfcbank.com/v1';

export async function getRecentTransactions(): Promise<Transaction[]> {
  try {
    const response = await fetch(`${HDFC_API_BASE_URL}/transactions/recent`, {
      headers: {
        'Authorization': `Bearer ${HDFC_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }

    const data = await response.json();
    return data.transactions.map((tx: any) => ({
      id: tx.id,
      amount: tx.amount,
      type: tx.type,
      description: tx.description,
      category: tx.category,
      timestamp: tx.timestamp,
      balance: tx.balance,
    }));
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
}

export async function setupWebhook(callbackUrl: string): Promise<boolean> {
  try {
    const response = await fetch(`${HDFC_API_BASE_URL}/webhooks`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HDFC_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: callbackUrl,
        events: ['transaction.created'],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to setup webhook');
    }

    return true;
  } catch (error) {
    console.error('Error setting up webhook:', error);
    return false;
  }
}

export async function getAccountBalance(): Promise<number> {
  try {
    const response = await fetch(`${HDFC_API_BASE_URL}/accounts/balance`, {
      headers: {
        'Authorization': `Bearer ${HDFC_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch balance');
    }

    const data = await response.json();
    return data.balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0;
  }
} 