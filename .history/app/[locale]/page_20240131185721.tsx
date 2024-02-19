"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "../../styles/page.module.scss";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="main" style={{ height: "100vh" }}>
      swiss
    </div>
  );
};

export default HomePage;
