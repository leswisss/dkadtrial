import type { Metadata } from 'next'
import { ProjectsContent } from '@/utils';
import initTranslations from '@/app/i18n';

/**Translations */
const i18nNamespaces = ["Navigation", "HomePage", "ServicesPage", "ContactPage", "ProjectsPage", "DetailsPage"];

type Props = {
  params: { locale: string, project: string };
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = params.locale;
  const slugg = params.project;

  //Find the current Project
  const project = ProjectsContent.find(project => project.slug === slugg);
  const title = project ? project.name : "404"
  const description = project && locale === "en" ? project.introDescription.en : project && locale === "fr" ? project.introDescription.fr : "404"

  const { t, resources } = await initTranslations(
    locale,
    i18nNamespaces
  );

  return {
    title: `${title} - ${description}`,
    description: description,
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