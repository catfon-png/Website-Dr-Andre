import { AreaMD } from '../components/AreaMD/AreaMD'
import implants from '../resources/implants (2).webp'
import dentist from '../resources/dentist.webp'
import tongue from '../resources/tongue.webp'
import '../styles/AreasAtuação.css'
import { DescriptionCO } from '../components/AreaMD/Descriptions/DescriptionCO'
import { DescriptionImp } from '../components/AreaMD/Descriptions/DescriptionImp'
import { DescriptionPO } from '../components/AreaMD/Descriptions/DescriptionPO'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

export const AreasAtuação = () => {
    const allAreas: [string, string, JSX.Element][] = [[dentist, 'Cirurgia Oral', <DescriptionCO />],
    [implants, 'Implantologia', <DescriptionImp />],
    [tongue, 'Patologia Oral', <DescriptionPO />]]

    const { ref: areaRef, inView: areaInView } = useInView();
    const areaAnimation = useAnimation();

    useEffect(() => {
        if (areaInView) {
            areaAnimation.start({
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.7 },
            });
        } else {
            areaAnimation.start({
                opacity: 0,
                x: 100,
                transition: { duration: 0.3 },
            });
        }
    }, [areaInView]);

    return (
        <div className='area-atuação'>
            <h1 className='area-atuação-heading'>Áreas de atuação</h1>
            <motion.div animate={{ x: ["-20%", "0%"], opacity: 1 }}
                transition={{ type: "tween", duration: 1 }}
                initial={{ x: "-30%", opacity: 0 }} >
            {/* <motion.div ref={areaRef} animate={areaAnimation}> */}
                {allAreas.map(([img, title, description]) =>
                    <AreaMD image={img} title={title} description={description} />)}
            </motion.div>

        </div>
    )
}
