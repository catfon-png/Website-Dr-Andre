import React, {useRef} from 'react'
import implants from '../resources/implants (2).webp'
import dentist from '../resources/dentist.webp'
import tongue from '../resources/tongue.webp'
import { Question } from '../components/Question/Question'
import { Opa } from '../components/OPA/Opa'
import { DescriptionCO } from '../components/AreaMD/Descriptions/DescriptionCO'
import { DescriptionImp } from '../components/AreaMD/Descriptions/DescriptionImp'
import { DescriptionPO } from '../components/AreaMD/Descriptions/DescriptionPO'
import { AreaMD } from '../components/AreaMD/AreaMD'
import '../styles/Homepage.css'
import { Header } from '../components/Header/Header'
import { motion, useInView } from "framer-motion"
// import { useInView } from "react-intersection-observer";

export const Homepage = () => {
  const allAreas: [string, string, JSX.Element][] =
    [[dentist, 'Cirurgia Oral', <DescriptionCO />],
    [implants, 'Implantologia', <DescriptionImp />],
    [tongue, 'Patologia Oral', <DescriptionPO />]]

  const ref = useRef(null);
  const isInView = useInView(ref)

  return (
    <div ref={ref}>
      <Header />
      <section className="areas" ref={ref}>
        
          <h2 className="areas-title">Áreas de Atuação</h2>
          <div className='areas-container'>
            {allAreas.map(([img, title, description]) =>
              <AreaMD image={img} title={title} description={description} />)}
          </div>
      </section>
      <hr className="horizontal-line" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        className="content">

      <Opa />
        </motion.div>
      <Question />
    </div>
  )
}
