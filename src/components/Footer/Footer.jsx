import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            I'm looking for new opportunities.
            <br /> For any queries or offers,
          </span>
          <span className="primaryText">
             <a href="charusharma140302@gmail">get in touch</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText"><b>Info</b></span>
            <br />
            <p>Jaipur, Rajasthan 302001</p>
            <br />
          </div>
          <ul className={css.menu}>
          <li><a href="#experties">About me</a></li>
          <li><a href="#people">Education</a></li>
          <li><a href="#work">Skills</a></li>
          <li><a href="#portfolio">Projects</a></li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
