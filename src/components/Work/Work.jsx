import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import {motion} from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
const Work = () => {
  return (
    <section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My Skills</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                </div>
              </div>
            );
          })}


          <div variants={zoomIn(1, 1)} className={css.progressbar}>
            <div variants={fadeIn("down", "tween", 0.1, 0.1)} className={css.line}></div>
            {/* <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div> */}

          </div>

          {/* <motion.div variants={textVariant2}>

          </motion.div> */}

        </div>
      </div>
    </section>
  );
};

export default Work;
