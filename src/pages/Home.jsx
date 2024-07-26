import React from "react";
import styles from "../style.js";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  GlobeDemo,
} from "../components";
import Lenis from "lenis";
import { useEffect } from "react";

function Home() {
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
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div style={{ height: "15vh" }} />

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <CardDeal />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
