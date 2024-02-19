import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

const regular = localFont({
  src: './LinearGrotesk-Regular.ttf',
  display: "swap",
  variable: "--regular-font"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
