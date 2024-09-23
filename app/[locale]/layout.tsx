import type { Metadata } from "next";
import localFont from "next/font/local";
import initTranslations from "../i18n";
import { Footer } from "@/components";
import TranslationsProvider from "@/utils/TranslationsProvider";
import { Analytics } from "@vercel/analytics/react"
import "../../styles/globals.scss"

const light = localFont({
  src: "../LinearGrotesk-Light.ttf",
  display: "swap",
  variable: "--light-font",
});

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

type Props = {
  params: { locale: string };
};


/**Translations */
const i18nNamespaces = [
  "Navigation",
  "HomePage",
  "ServicesPage",
  "ContactPage",
  "ProjectsPage",
  "AboutPage",
  "DetailsPage",
];

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = params.locale;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  
  return {
    title: t("HomePage:metadatatitle"),
    description: t("HomePage:metadatadesc"),
    applicationName: "DK Architecture & Design",
    twitter: {
      card: "summary_large_image"
    }
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(
    params.locale,
    i18nNamespaces
  );

  return (
    <html lang={params.locale}>
      <body
        className={`${light.variable} ${regular.variable} ${medium.variable} ${semiBold.variable} ${bold.variable}`}
      >
        <TranslationsProvider
          resources={resources}
          locale={params.locale}
          namespaces={i18nNamespaces}
        >
          {children}
          <Footer/>
        </TranslationsProvider>
        <Analytics />
      </body>
    </html>
  );
}

