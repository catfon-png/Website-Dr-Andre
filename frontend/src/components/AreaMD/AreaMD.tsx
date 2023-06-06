import './AreaMD.css'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
type AreaProps = {
    image: string,
    title: string,
    description: JSX.Element,
}

export const AreaMD = ({ image, title, description }: AreaProps) => {
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
                x: -100,
                transition: { duration: 0.3 },
            });
        }
    }, [areaInView]);
    return (
            <motion.div ref={areaRef} animate={areaAnimation} className='area'>
        {/* <div className='area'> */}
            <div className="area-img">
                <a href="/areas">
                <img src={image} alt={title} />
                </a>
            </div>
            <div className="area-text">
                <h2 className="area-title">
                <a href="/areas">{title}</a></h2>
                {description}
            </div>
        </motion.div>
    )
}
