import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar, Footer } from "@/components";
import initTranslations from "../i18n";
import TranslationsProvider from "@/utils/TranslationsProvider";
import "../../styles/globals.scss";


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


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = params.locale;

  // fetch data
  const project = await useFetch(`/projects?filters[slug][$eq]=${id}`);

  return {
    title: project[0].attributes.name,
    description: project[0].attributes.intro,
  };
}

/**Translations */
const i18nNamespaces = ["Navigation", "HomePage"];

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
        <TranslationsProvider resources={resources} locale={params.locale} namespaces={i18nNamespaces}>
          <Navbar lang={params.locale} />
          {children}
          <Footer/>
        </TranslationsProvider>
      </body>
    </html>
  );
}
