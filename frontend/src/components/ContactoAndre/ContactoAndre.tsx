import { HiOutlineMail } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import './ContactoAndre.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

type ContactProps = {
    foto: string,
    titulo: string,
    descriçãoFoto: string,
    email: string,
    iglink: string,
    instagram: string,
    lilink?: string,
    linkedin?: string
}

export const ContactoAndre = ({ foto, titulo, descriçãoFoto, email, iglink, instagram, lilink, linkedin }: ContactProps) => {
    const { ref: contactRef, inView: contactInView } = useInView();
    const contactAnimation = useAnimation();

    useEffect(() => {
        if (contactInView) {
            contactAnimation.start({
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.7 },
          });
        } else {
            contactAnimation.start({
            opacity: 0,
            x: 100,
            transition: { duration: 0.3 },
          });
        }
      }, [contactInView]);

    return (
        <motion.div ref={contactRef} animate={contactAnimation}  className='contacto'>
            <img src={foto} alt={descriçãoFoto} className="contacto-img"/>
            <div className="contacto-text">
                <h2 className="contacto-title">{titulo}</h2>
                <div className="email">
                    <HiOutlineMail size={32} color="#2B4C68" className='icon' />
                    <a href={`mailto:${email}`}><p className='mail-p'>{email}</p></a>

                </div>
                <div className="instagram">
                    <a href={iglink} target="_blank">
                        <AiFillInstagram size={34} className='icon' />
                        <p className='instagram-p'>{instagram}</p>
                    </a>
                </div>
                {lilink ?
                    <div className="linkedin">
                        <a href={lilink} target="_blank">
                            <BsLinkedin size={26} className='icon'/>
                            <p className='linkedin-p'>{linkedin}</p>
                        </a>
                    </div>
                    :
                    null}
            </div>
        </motion.div>
    )
}
