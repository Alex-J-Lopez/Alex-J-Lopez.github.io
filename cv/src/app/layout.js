import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AJL Portfolio",
  description: "Portfolio website for Alexander J. Lopez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 min-h-screen flex flex-col`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
