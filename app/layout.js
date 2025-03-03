import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Name Our Brownie & Win $10,000! | Frankie C Contest",
  description:
    "Want a chance to win $10,000? Help us name our delicious new high-protein brownie and claim the cash prize! Submit your best name idea and be part of the next big food brand. Enter now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner /> {/* Add this at the bottom */}
      </body>
    </html>
  );
}
