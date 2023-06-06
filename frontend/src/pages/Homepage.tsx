import React, { useEffect } from 'react';
import implants from '../resources/implants (2).webp';
import dentist from '../resources/dentist.webp';
import tongue from '../resources/tongue.webp';
import { Question } from '../components/Question/Question';
import { Opa } from '../components/OPA/Opa';
import { DescriptionCO } from '../components/AreaMD/Descriptions/DescriptionCO';
import { DescriptionImp } from '../components/AreaMD/Descriptions/DescriptionImp';
import { DescriptionPO } from '../components/AreaMD/Descriptions/DescriptionPO';
import { AreaMD } from '../components/AreaMD/AreaMD';
import '../styles/Homepage.css';
import { Header } from '../components/Header/Header';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useInView } from "react-intersection-observer";

export const Homepage = () => {
  const allAreas: [string, string, JSX.Element][] =
    [[dentist, 'Cirurgia Oral', <DescriptionCO />],
    [implants, 'Implantologia', <DescriptionImp />],
    [tongue, 'Patologia Oral', <DescriptionPO />]]

// maybe two refs for two different divs
  const { ref, inView } = useInView({
    // threshold: 0.1,
  });

  const animation = useAnimation();

  useEffect(() => {
    // console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.2, duration: 0.7 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: 100,
        transition: { duration: 0.3 },
      });
    }
  }, [inView]);

  return (
    <div >
      <Header />
      <motion.section className="areas" animate={{ x: ["30%", "0%"], opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        initial={{ x: "40%", opacity: 0 }}>
        <h2 className="areas-title">Áreas de Atuação</h2>
        <div className='areas-container'>
          {allAreas.map(([img, title, description]) =>
            <AreaMD image={img} title={title} description={description} />)}
        </div>
      </motion.section>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        className="content"> */}
      <hr className="horizontal-line" />
      <motion.div ref={ref} animate={animation}>
        <Opa />
      {/* </motion.div> */}
      {/* <motion.div ref={ref} animate={animation}> */}
        <Question />
      </motion.div>

      {/* </motion.div> */}
    </div>
  )
}
