import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND_NAME, SITE_URL } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteDescription =
  "India's digital prepaid voucher and wallet platform. Buy vouchers, load your wallet via UPI, pay merchants, and earn rewards with free mini-games.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  title: `${BRAND_NAME} — Your Digital Wallet for India's Connected Economy`,
  description: siteDescription,
  openGraph: {
    siteName: BRAND_NAME,
    type: "website",
    url: SITE_URL,
    title: `${BRAND_NAME} — Your Digital Wallet for India's Connected Economy`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-canvas text-on-surface min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
