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

// export const metadata: Metadata = {
//   title: "DK Architecture & Design",
//   description: "Experience the transformative power of design with DK Architecture & Design. Our expertise in exterior, interior, and landscape design, coupled with meticulous supervision, crafts spaces that inspire. We're committed to architectural excellence, creating sustainable, aesthetically pleasing, and functional spaces. Start your journey with us and shape your vision into reality.",
// };

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

  const metadata: Metadata = {
    title: "DK Architecture & Design",
    description: "Experience the transformative power of design with DK Architecture & Design. Our expertise in exterior, interior, and landscape design, coupled with meticulous supervision, crafts spaces that inspire. We're committed to architectural excellence, creating sustainable, aesthetically pleasing, and functional spaces. Start your journey with us and shape your vision into reality.",
  };

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
