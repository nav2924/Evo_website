import { useState } from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [scrollCounterOn, setScrollCounterOn] = useState(false);
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        const hasPlus = stat.value.includes("+");
        const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);

        return (
          <div
            key={stat.id}
            className={`flex-1 flex justify-start items-center flex-row m-3`}
          >
            <ScrollTrigger
              onEnter={() => setScrollCounterOn(true)}
              onExit={() => setScrollCounterOn(false)}
            >
              <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                {scrollCounterOn && (
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={2}
                    delay={0}
                  />
                )}
                {hasPlus && "+"}
              </h4>
            </ScrollTrigger>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
