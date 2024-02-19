import type { Metadata } from 'next'
import initTranslations from '@/app/i18n';

/**Translations */
const i18nNamespaces = ["Navigation", "HomePage"];


//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = params.locale;
  const { t, resources } = await initTranslations(
    locale,
    i18nNamespaces
  );

  return {
    title: t("HomePage:metadatatitle"),
    description: t("HomePage:metadatadesc"),
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