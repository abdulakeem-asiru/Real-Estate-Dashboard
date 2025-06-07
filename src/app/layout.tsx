import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeMode from "./context/ThemeMode";
import ReactQueryClient from "./providers/ReactQueryClient";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Equinox",
  description: "Your one stop place for all real estate properties",
  icons: {
    icon: '/logo.png' //favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryClient>
        <ThemeMode>
        {children}
          </ThemeMode>
        </ReactQueryClient>
      </body>
    </html>
  );
}
