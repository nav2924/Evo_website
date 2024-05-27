import { widgets } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover top internships <br className="sm:block hidden" /> in a few
        easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Start your professional journey with our curated internship and training
        programs. Find opportunities that match your career goals and get the
        support you need to succeed.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={widgets} alt="internship" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
