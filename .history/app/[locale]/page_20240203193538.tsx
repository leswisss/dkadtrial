import React from "react";
import { HomePageWrapper } from "@/components";


const HomePage = ({params}: {params: {locale: string}}) => {
  return (
    <div className="main">
      <HomePageWrapper locale={params.locale}/>
    </div>
  );
};

export default HomePage;
