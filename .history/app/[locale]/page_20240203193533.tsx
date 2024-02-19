import React from "react";
import { HomePageWrapper } from "@/components";


const HomePage = ({params}: {params: {locale: string}}) => {
  return (
    <div className="main">
      <HomePageWrapper locale={p}/>
    </div>
  );
};

export default HomePage;
