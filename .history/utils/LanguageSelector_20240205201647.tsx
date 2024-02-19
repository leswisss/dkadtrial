"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";


export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams()
 
  const service = searchParams.get('service')

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    let newPathname = currentPathname.replace(
      new RegExp(`^/(${["fr", "en"].join("|")})`),
      `/${newLocale}`
    );

    // Check if the current page is 'projets' or 'projects'
    if (newPathname.includes("/projets") || newPathname.includes("/projects")) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/projects", "/projets")
          : newPathname.replace("/projets", "/projects");
    }

    // Check if there are any search parameters and adjust them based on the new locale
  if (service) {
    const service = router.query.service;
    let newService = service;

    // Translate the service parameter
    if (newLocale === 'fr') {
      if (service === 'interior') newService = 'intérieur';
      else if (service === 'exterior') newService = 'extérieur';
      else if (service === 'landscaping') newService = 'aménagement paysager';
    } else {
      if (service === 'intérieur') newService = 'interior';
      else if (service === 'extérieur') newService = 'exterior';
      else if (service === 'aménagement paysager') newService = 'landscaping';
    }

    // Add the translated service parameter to the pathname
    newPathname += `?service=${newService}`;
  }

    router.push(newPathname);

    router.refresh();
  };

  return (
    <div style={{ display: "flex", gap: "0.3rem" }}>
      <span
        style={{
          opacity: currentLocale === "en" ? "0.5" : "1",
          cursor: currentLocale === "en" ? "default" : "pointer",
        }}
        onClick={() => {
          handleChange("en");
        }}
      >
        EN
      </span>
      <span style={{ cursor: "default" }}>/</span>
      <span
        style={{
          opacity: currentLocale === "fr" ? "0.5" : "1",
          cursor: currentLocale === "fr" ? "default" : "pointer",
        }}
        onClick={() => {
          handleChange("fr");
        }}
      >
        FR
      </span>
    </div>
  );
}
