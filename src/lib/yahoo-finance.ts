import yahooFinance from 'yahoo-finance2';

export interface MutualFund {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  nav: number;
  category: string;
}

export interface SavingsInstrument {
  name: string;
  interestRate: number;
  minInvestment: number;
  type: string;
  riskLevel: string;
}

export async function getTopMutualFunds(): Promise<MutualFund[]> {
  // List of top Indian mutual fund symbols
  const symbols = [
    'HDFC_MF_EQ.BO',
    'ICICI_PRU_NIFTY.BO',
    'SBI_BLUE_CHIP.BO',
    'AXIS_BLUECHIP.BO',
    'KOTAK_STANDARD.BO'
  ];

  try {
    const quotes = await Promise.all(
      symbols.map(async (symbol) => {
        const quote = await yahooFinance.quote(symbol);
        return {
          symbol,
          name: quote.longName || quote.shortName || symbol,
          price: quote.regularMarketPrice || 0,
          change: quote.regularMarketChange || 0,
          changePercent: quote.regularMarketChangePercent || 0,
          nav: quote.regularMarketPrice || 0,
          category: 'Equity' // You might want to fetch this from a different source
        };
      })
    );

    return quotes;
  } catch (error) {
    console.error('Error fetching mutual fund data:', error);
    return [];
  }
}

export const getSavingsInstruments = (): SavingsInstrument[] => {
  // This could be fetched from an API in the future
  return [
    {
      name: 'Fixed Deposit',
      interestRate: 7.5,
      minInvestment: 10000,
      type: 'Fixed Income',
      riskLevel: 'Low'
    },
    {
      name: 'Public Provident Fund',
      interestRate: 7.1,
      minInvestment: 500,
      type: 'Government Scheme',
      riskLevel: 'Low'
    },
    {
      name: 'National Savings Certificate',
      interestRate: 7.0,
      minInvestment: 1000,
      type: 'Government Scheme',
      riskLevel: 'Low'
    },
    {
      name: 'Recurring Deposit',
      interestRate: 6.7,
      minInvestment: 500,
      type: 'Fixed Income',
      riskLevel: 'Low'
    }
  ];
}; 