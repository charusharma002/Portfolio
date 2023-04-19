import React from "react";
import { projects } from "../../utils/data";
import css from "./Portfolio.module.scss";
import { motion } from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant, textVariant2, zoomIn } from "../../utils/motion";
const Work = () => {
  return (
    <section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">Projects</span>

        <div className={`flexCenter ${css.experiences}`}>
          {/* {workExp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph.place}</span>)} */}
          {projects.map((exp, i) => {
            return (
              <div>
              <div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={`flexCenter ${css.showCase}`}>
                  <img onClick={() =>
                    window.open(exp.link)
                  } variants={fadeIn("up", "tween", .5, .6)} src={exp.image} alt="project" />
                </div>
                <div className={css.role}>
                  <h1>{exp.name}</h1>
                  <p>{exp.role}</p>
                  <h4>Key Technologies Used :</h4>
                  <div className={css.boxContainer}>
                    {exp.tech.split(" ").map((word, index) => (
                      <div key={index} className={css.box}>
                        {word}
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
              <div className={css.line}></div>
              </div>
            );
          })}


          {/* <div variants={zoomIn(1, 1)} className={css.progressbar}> */}
          {/* <div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></div> */}
          {/* <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div> */}
          {/* </div> */}

        </div>
      </div>
    </section>
  );
};

export default Work;