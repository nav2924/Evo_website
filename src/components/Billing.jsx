import { apple, google, widgets } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img
        src={widgets}
        alt="internship"
        className="w-[100%] h-[100%] relative z-[128]"
      /> */}

      {/* gradient start */}
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Streamline your <br className="sm:block hidden" /> internship and
        training
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover a seamless way to manage your internships and training
        programs. Our platform offers easy tracking, insightful analytics, and
        comprehensive support to ensure your professional development journey is
        smooth and successful.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
