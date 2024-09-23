import React, { Suspense } from "react";
import { ContactPageWrapper } from "@/components";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

const ContactPage = () => {
  return (
    <Suspense fallback={<div style={{width: "100vw", height: "100dvh", position: "fixed", top: 0, left: 0, backgroundColor: "#013cac", zIndex: 10000}}></div>}>
      <div className="main">
        <ContactPageWrapper />
      </div>
    </Suspense>
  )
}

export default ContactPage