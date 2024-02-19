"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "../../styles/page.module.scss";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      du
    });

    function raf(time: number) {
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
