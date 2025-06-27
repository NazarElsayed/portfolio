import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import TopNav from "@/app/ui/TopNav";

export const metadata: Metadata = {
  title: "Nazar Elsayed | Portfolio",
  description: "Nazar Elsayed portfolio website.",
  authors: [{ name: "Nazar Elsayed" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
