import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reverse Budgeting App",
  description: "Track your expenses and optimize your spending",
  keywords: ["budgeting", "finance", "expenses", "tracking"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Reverse Budgeting App",
    description: "Track your expenses and optimize your spending",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Budgeting App",
    description: "Track your expenses and optimize your spending",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
  },
}; 