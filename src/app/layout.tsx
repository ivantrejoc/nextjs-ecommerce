import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartProvider, SessionAuthProvider } from "@/context";

const monsterrat = Montserrat({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Buime",
  description: "Online store. Find whatever you want in one site"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <SessionAuthProvider>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        </SessionAuthProvider>
        
      </body>
    </html>
  );
}
