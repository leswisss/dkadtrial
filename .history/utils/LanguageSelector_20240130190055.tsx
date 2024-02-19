"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [newLocale, setNewLocale] = useState<string>("");

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    const newPathname = currentPathname.replace(
      new RegExp(`^/(${["fr", "en"].join("|")})`),
      `/${newLocale}`
    );

    router.push(newPathname);

    router.refresh();
  };

  return (
    <div style={{display: "flex", gap: "0.3rem"}}>
      <span
        style={{
          opacity: currentLocale === "en" ? "0.5" : "1",
          cursor: "pointer",
        }}
        onClick={() => {
          setNewLocale("en");
          handleChange();
        }}
      >
        EN
      </span>
      <span>/</span>
      <span
        style={{
          opacity: currentLocale === "fr" ? "0.5" : "1",
          cursor: "pointer",
        }}
        onClick={() => {
          setNewLocale("fr");
          handleChange();
        }}
      >
        FR
      </span>
    </div>
  );
}
