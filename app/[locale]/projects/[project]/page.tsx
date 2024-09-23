import React, { Suspense } from "react";
import { ProjectsContent } from "@/utils";
import { DetailsPageWrapper } from "@/components";

export function generateStaticParams() {
  const projects = ProjectsContent;

  return projects.map((post) => ({
    project: post.slug,
  }));
}

const DetailsPage = () => {
  return (
    <Suspense fallback={<div style={{width: "100vw", height: "100dvh", position: "fixed", top: 0, left: 0, backgroundColor: "#013cac", zIndex: 10000}}></div>}>
      <div className="main">
        <DetailsPageWrapper />
      </div>
    </Suspense>
  );
};

export default DetailsPage;
