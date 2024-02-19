import React from "react";
import { HomePageWrapper } from "@/components";


const HomePage = ({params}: {params: {locale: string}}) => {
  return (
    <div className="main">
      <HomePageWrapper />
    </div>
  );
};

export default HomePage;
