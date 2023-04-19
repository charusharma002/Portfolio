import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
// import {GitHubIcon} from '@mui/icons-material'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="hero"></a>
      <div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Charu.
          </span>
          {/* <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span> */}
        </div>

        
        <div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <img variants={slideIn("up", "tween", 0.2, 1)} src="./person.png" alt="" />
        </div>

        <a className={css.email} href="mailto:charusharma140302@gmail.com">
          charusharma140302@gmail.com
        </a>

        <div className={css.lowerElements}>
          <div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            {/* <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div> */}
          </div>

          <div variants={fadeIn("left", "tween", 0.2, 1)} className={css.certificate}>
          <a target="_blank" href="https://drive.google.com/file/d/1kv18N0EFylAmqH0RPnuO7FUk5HjurLqg/view?usp=share_link"><img  src="./down.jpg" alt=""/></a>
          <a target="_blank" href="https://github.com/charusharma002"><img  src="./certificate.png" alt=""/></a>
            <a target="_blank" href="https://www.linkedin.com/in/charusharma140302/"><img  src="./linkedin.png" alt="" /></a>
            {/* <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span> */}

            {/* <GitHubIcon /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
