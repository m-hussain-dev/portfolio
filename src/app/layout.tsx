import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
// import WhatsAppButton from "@/components/home/WhatsApp";
// import Footer from "@/components/home/Footer";
import { Toaster } from "react-hot-toast"; // for toast notifications

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-black to-blue-950 text-white `}
      >
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-grow">{children}</main>
        {/* <WhatsAppButton /> */}
        {/* Footer visible on all pages
        <Footer /> */}

        {/* Toast notifications */}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
