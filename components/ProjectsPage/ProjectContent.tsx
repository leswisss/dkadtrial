"use client";

import React, {useState} from "react";
import { useSearchParams } from "next/navigation";
import { ProjectProps } from "@/types";
import { Project, Rounded } from "..";
import { ProjectsContent } from "@/utils";
import styles from "../../styles/ProjectsPage/pcontent.module.scss";

const ProjectContent = ({
  cta,
  animationFinished,
  currentLocale,
}: {
  cta: string;
  animationFinished: boolean;
  currentLocale: string;
}) => {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");


  //Filter the items by services and sorting from new to old
  const filterProjects = (
    ProjectsContent: ProjectProps[],
    serviceParam: string | null,
    currentLocale: string
  ) => {
    return serviceParam && currentLocale === "en"
      ? ProjectsContent.filter((item) =>
          item.serviceslug.en.includes(serviceParam)
        ).sort((a, b) => b.year - a.year)
      : serviceParam && currentLocale === "fr"
      ? ProjectsContent.filter((item) =>
          item.serviceslug.fr.includes(serviceParam)
        ).sort((a, b) => b.year - a.year)
      : ProjectsContent.sort((a, b) => b.year - a.year);
  };

  const filteredProjects = filterProjects(
    ProjectsContent,
    serviceParam,
    currentLocale
  );

  //Managing Pagination
  const [itemsToShow, setItemsToShow] = useState(4);

  const handleLoadMore = () => {
    if (itemsToShow < filteredProjects.length) {
      setItemsToShow(itemsToShow + 4);
    }
  };

  const isReachingEnd = itemsToShow >= filteredProjects.length;

  return (
    <section
      className={styles.content__section}
      style={{
        clipPath: animationFinished
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        transition: "clip-path 2s ease",
        transitionDelay: "3.5s",
      }}
    >
      <div className={`container ${styles.content__container}`}>
        <div className={styles.content__wrapper}>
          {filteredProjects.slice(0, itemsToShow).map((data, i) => (
            <Project data={data} key={i} currentLocale={currentLocale} />
          ))}
        </div>
        {
          !isReachingEnd && 
        <div className={styles.rounded__div}>
          <Rounded
            backgroundColor="#013cac"
            classNames={styles.rounded}
            linker={false}
            onClick={handleLoadMore}
          >
            <p>{cta}</p>
          </Rounded>
        </div>
        }
      </div>
    </section>
  );
};

export default ProjectContent;
