import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        As a software developer, I have the skills and experience to create both
        front end and backend web applications. I use HTML, CSS, JavaScript and
        React to design websites that are user-friendly and responsive, like
        this one. I also use C#, .NET, ASP.NET and SQL to develop backend
        solutions that are robust and secure. I am always eager to learn new
        technologies and best practices from others. I welcome constructive
        feedback on my work, so please do not hesitate to email me if you have
        any suggestions about my website. I value teamwork and collaboration,
        and I believe I can contribute positively to your team. Thanks for
        coming!
      </motion.p>
    </>
  );
};

export default About;
