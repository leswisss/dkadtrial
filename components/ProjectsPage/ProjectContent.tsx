import React from "react";
import { Project, Rounded } from "..";
import { ProjectsData } from "@/utils";
import styles from "../../styles/ProjectsPage/pcontent.module.scss";

const ProjectContent = ({cta, animationFinished}: {cta: string, animationFinished: boolean}) => {
  return (
    <section className={styles.content__section} style={{clipPath: animationFinished ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", transition: "clip-path 2s ease", transitionDelay: "3.5s"}}>
      <div className={`container ${styles.content__container}`}>
        <div className={styles.content__wrapper}>
          {ProjectsData.map((data, i) => (
            <Project data={data} key={i} />
          ))}
        </div>
        <div className={styles.rounded__div}>
          <Rounded backgroundColor="#013cac" classNames={styles.rounded} linker={false}>
            <p>{cta}</p>
          </Rounded>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
