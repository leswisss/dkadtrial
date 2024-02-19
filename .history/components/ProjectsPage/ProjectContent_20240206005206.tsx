import React from "react";
import { Project, Rounded } from "..";
import { ProjectsData } from "@/utils";
import styles from "../../styles/ProjectsPage/pcontent.module.scss";

const ProjectContent = ({cta}) => {
  return (
    <section className={styles.content__section}>
      <div className={`container ${styles.content__container}`}>
        <div className={styles.content__wrapper}>
          {ProjectsData.map((data, i) => (
            <Project data={data} key={i} />
          ))}
        </div>
        <div className={styles.rounded__div}>
          <Rounded backgroundColor="#013cac" classNames={styles.rounded} linker={false}>
            <p>Voir Plus</p>
          </Rounded>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
