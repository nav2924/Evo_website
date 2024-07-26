import React from "react";
import {
  Clients,
  FeedbackCard,
  GlobeDemo,
  Navbar,
  Footer,
} from "../components";
import styles from "../style";
import Lenis from "lenis";
import { useEffect } from "react";

function Product() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      style={{ backgroundColor: "#00040F" }}
      className="w-full overflow-hidden"
    >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center py-30 h-screen relative w-full gap-y-10"
        style={{ backgroundColor: "#00040F" }}
      >
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <h2 className="text-center text-xl md:text-4xl font-bold text-white dark:text-white">
            Our Internships are World-Wide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-200 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it
          </p>

          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="flex items-center justify-center mt-10 h-72 md:h-full z-10">
            <GlobeDemo />
          </div>
        </div>
      </div>
      <div style={{ height: "15vh" }} />

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text-center text-xl md:text-4xl font-bold text-white dark:text-white mb-24">
            Courses We offer are
          </h2>
          <FeedbackCard />
          <div className="mt-32">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
