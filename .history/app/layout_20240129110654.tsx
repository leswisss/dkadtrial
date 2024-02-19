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

const medium = localFont({
  src: './LinearGrotesk-Medium.ttf',
  display: "swap",
  variable: "--medium-font"
})

const semiBold = localFont({
  src: './LinearGrotesk-SemiBold.ttf',
  display: "swap",
  variable: "--semiBold-font"
})

const bold = localFont({
  src: './LinearGrotesk-Bold.ttf',
  display: "swap",
  variable: "--bold-font"
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
      <body className={`${regular.variable} ${}`}>{children}</body>
    </html>
  );
}
