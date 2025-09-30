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
  metadataBase: new URL('https://alex-j-lopez.github.io'),
  title: "Alexander Lopez - Software Engineer",
  description: "Portfolio website for Alexander J. Lopez",
  icons: {
    icon: [
      { url: '/media/PersonalImages/Headshots/Icons/favicon.ico' },
      { url: '/media/PersonalImages/Headshots/Icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/media/PersonalImages/Headshots/Icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: { url: '/media/PersonalImages/Headshots/Icons/apple-touch-icon.png' },
    shortcut: '/media/PersonalImages/Headshots/Icons/favicon.ico'
  },
  openGraph: {
    title: 'Alexander Lopez - Software Engineer',
    description: 'Portfolio website for Alexander J. Lopez',
    url: 'https://alex-j-lopez.github.io', 
    siteName: 'Alexander Lopez',
    images: [
      {
        url: '/media/PersonalImages/Headshots/Icons/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Alexander J. Lopez'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexander Lopez - Software Engineer',
    description: 'Portfolio website for Alexander J. Lopez',
    images: ['/media/PersonalImages/Headshots/Icons/android-chrome-512x512.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/media/PersonalImages/Headshots/Icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/media/PersonalImages/Headshots/Icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/media/PersonalImages/Headshots/Icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/media/PersonalImages/Headshots/Icons/apple-touch-icon.png" />
        <link rel="manifest" href="/media/PersonalImages/Headshots/Icons/site.webmanifest" />

        <meta name="theme-color" content="#111827" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="msapplication-TileImage" content="/media/PersonalImages/Headshots/Icons/android-chrome-192x192.png" />

        <meta property="og:title" content="Alexander Lopez - Software Engineer" />
        <meta property="og:description" content="Portfolio website for Alexander J. Lopez" />
        <meta property="og:image" content="/media/PersonalImages/Headshots/Icons/android-chrome-512x512.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alexander Lopez - Software Engineer" />
        <meta name="twitter:description" content="Portfolio website for Alexander J. Lopez" />
        <meta name="twitter:image" content="/media/PersonalImages/Headshots/Icons/android-chrome-512x512.png" />
      </head>
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
