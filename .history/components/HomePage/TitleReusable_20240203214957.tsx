import React from "react";
import { useInView } from "react-intersection-observer";

const TitleReusable = ({title, text, classNames}: {title: string, text: string, classNames?: string}) => {
  //Text Animation
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const splitwords = (phrase: string, condition: boolean) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      body.push(<p key={`word-${i}`}><span style={{top: condition ? "0%" : "-100%"}} >{word}</span></p>);
    });

    return body;
  };
  return (
    <div className={`section__header ${classNames}`}>
      <div className="header__overflow">
        <h1 className="large__font" style={{textTransform: "capitalize"}}>{title}</h1>
      </div>
      <p className="p__font">
        {text}
      </p>
    </div>
  );
};

export default TitleReusable;
