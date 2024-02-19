import React from "react";
import styles from "../../styles/HomePage/titlereusable.module.scss"

const TitleReusable = ({title, text, classname}: {title: string, text: string, classname: string}) => {
  return (
    <div className={`section__header ${styles.header__style}`}>
      <div className="header__overflow">
        <h1 className="large__font">{title}</h1>
      </div>
      <p className="p__font">
        {text}
      </p>
    </div>
  );
};

export default TitleReusable;
