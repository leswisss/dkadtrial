import type { Metadata } from 'next'
import initTranslations from '@/app/i18n';

/**Translations */
const i18nNamespaces = ["Navigation", "HomePage", "ServicesPage"];

type Props = {
  params: { locale: string };
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = params.locale;
  const { t, resources } = await initTranslations(
    locale,
    i18nNamespaces
  );

  return {
    title: t("Services:metadatatitle"),
    description: t("Services:metadatadesc"),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}