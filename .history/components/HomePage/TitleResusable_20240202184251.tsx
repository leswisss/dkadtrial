import React from "react";

const TitleResusable = () => {
  return (
    <div className={`section__header ${styles.header__style}`}>
      <div className="header__overflow">
        <h1 className="large__font">Nos Solutions</h1>
      </div>
      <p className="p__font">
        Notre gamme complète de services est conçue pour répondre à tous vos
        besoins architecturaux. De la conception initiale à l'aménagement
        paysager final, nous assurons un parcours sans faille vers la création
        de l'espace de vos rêves. Explorez nos offres pour voir comment nous
        pouvons vous aider.
      </p>
    </div>
  );
};

export default TitleResusable;
