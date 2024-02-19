import React from "react";
import { Project, Rounded } from "..";
import { ProjectsData } from "@/utils";
import styles from "../../styles/ProjectsPage/pcontent.module.scss";

const ProjectContent = () => {
  return (
    <section className={styles.content__section}>
      <div className={`container ${styles.content__container}`}>
        <div className={styles.content__wrapper}>
          {ProjectsData.map((data, i) => (
            <Project data={data} key={i} />
          ))}
        </div>
        <div className="">
          <Rounded backgroundColor="">
            <p>Voir Plus</p>
          </Rounded>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
