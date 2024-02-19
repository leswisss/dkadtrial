import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components";
import initTranslations from "../i18n";
import TranslationsProvider from "@/utils/TranslationsProvider";
import "../../styles/globals.scss";

const regular = localFont({
  src: "../LinearGrotesk-Regular.ttf",
  display: "swap",
  variable: "--regular-font",
});

const medium = localFont({
  src: "../LinearGrotesk-Medium.ttf",
  display: "swap",
  variable: "--medium-font",
});

const semiBold = localFont({
  src: "../LinearGrotesk-SemiBold.ttf",
  display: "swap",
  variable: "--semiBold-font",
});

const bold = localFont({
  src: "../LinearGrotesk-Bold.ttf",
  display: "swap",
  variable: "--bold-font",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


/**Translations */
const i18nNamespaces = ["Navigation"];


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t } = await initTranslations(lang, ["Navigation"]);
  return (
    <html lang={params.locale}>
      <body
        className={`${regular.variable} ${medium.variable} ${semiBold.variable} ${bold.variable}`}
      >
        <Navbar lang={params.locale} />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
