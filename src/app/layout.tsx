import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reverse Budgeting App",
  description: "Smart budgeting and investment tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
