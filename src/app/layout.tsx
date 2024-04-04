import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krowd",
  description: "Deteksi cepat orang pada gambar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(
      "min-h-screen font-sans antialiased grainy",
      inter.className
    )}>
    <Toaster/>
    <Navbar/>
    {children}
    </body>
    </html>
  );
}
