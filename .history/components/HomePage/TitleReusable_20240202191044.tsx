import React from "react";

const TitleReusable = ({title, text, classNames}: {title: string, text: string, classNames?: string}) => {
  return (
    <div className={`section__header ${classNames}`}>
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
