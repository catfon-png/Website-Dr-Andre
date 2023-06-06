import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Opa.css'
import logo from '../../resources/opa-black-no-bg.webp'
import flyer from '../../resources/IMG_0023.webp'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { motion} from "framer-motion"


export const Opa = () => {
    const navigate = useNavigate();
    const navigateToCursos = () => {
        navigate('/cursos')
    }
    const [isHomepage, setIsHomepage] = useState(true);
    useEffect(() => {
        setIsHomepage(window.location.pathname === '/')
    })

    return (
        <section className='opa'>
            <motion.div animate={{ x: ["-50%", "0%"], opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ x: "-80%", opacity: 0 }} className='opa-left'>
                <img src={logo} alt="Oral Pathology Academy Logo" className='opa-logo'/>
                {!isHomepage ?
                    <div className="flyer-e-contactos">
                        <img src={flyer} alt="Oral Pathology Academy Flyer" className='opa-flyer'/>
                        <div className="contactos-opa">
                            <h4 className="contactos-opa-heading">
                                Entre em contacto:
                            </h4>
                            <div className="email">
                                <HiOutlineMail size={32} color="#2B4C68" className='icon' />
                                <a href='mailto:oralpathologyacademy@gmail.com'><p  className="email-p">oralpathologyacademy@gmail.com</p></a>
                            </div>
                            <div className="instagram">
                                <a href='https://www.instagram.com/oralpathologyacademy/' target="_blank">
                                    <AiFillInstagram size={32} className='icon' />
                                    <p className="instagram-p">oralpathologyacademy</p>
                                </a>
                            </div>
                        </div>   
                    </div> :
                    null
                }
            </motion.div>
            <motion.div animate={{ x: ["50%", "0%"], opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ x: "80%", opacity: 0 }} className='opa-right'>
                <h1 className="opa-heading">Oral Pathology Academy</h1>
                {!isHomepage ?
                    <div className='opa-long-text'>
                        <p>OPA, a academia que pretende descomplicar a patologia oral. </p>
                        <p> O cancro oral é o sexto mais comum no mundo, contudo, continua a ser diagnosticado em estadios muito avançados com impacto severo na qualidade de vida dos pacientes, podendo até causar a morte.</p>
                        <p>O Médico dentista é o profissional por eleição no diagnóstico de patologias da cavidade oral e no despiste de lesões potencialmente malignas. </p>
                        <p>Ao longo do meu trajeto enquanto Médico Dentista, tenho-me dedicado a esta área e a Oral Pathology Academy (OPA) surge com o objetivo de mudar este paradigma.
                            A nossa missão consiste em capacitar o Médico dentista a identificar e tratar as lesões da cavidade oral, assim como a sinalizar precocemente uma lesão potencialmente maligna.
                            Este projeto nasce de uma vontade de descomplicar a patologia oral, e irá debruçar-se sobre o estudo das patologias mais frequentes em consultório e respetivo tratamento.</p>
                        <p>O nosso primeiro curso, “Introdução à Patologia Oral Clínica” irá ocorrer nos dias 16 e 17 de Junho, em Lisboa.</p>
                        <p>Este curso é dirigido a Médicos Dentistas, Médicos Estomatologistas, Médicos de Medicina Geral e Familiar e ainda estudantes destas áreas.</p>
                        <p>Pretende ser um curso bastante prático e interativo, pelo que as vagas são limitadas.</p>
                        <p>Convidamos os leitores a iniciar esta viagem da Patologia Oral ou a fazer um refresh aos seus conhecimentos.</p>

                    </div>
                    : <div className='opa-short-text'>
                        <p>Fundador desta academia cuja missão consiste em descomplicar a patologia oral. </p>
                        <p>O primeiro curso desta academia irá ocorrer a 16 e 17 de junho de 2023, em Lisboa.</p>
                    </div>}
                <div className='opa-buttons'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUdsFd_Kp9Rrv2bLk5Am0zpO17LF0XG5E1TOUY7pypfpbl5w/viewform?usp=send_form" target='_blank'>
                        <button className='btn-inscrever'>Inscreva-se</button>
                    </a>
                    {isHomepage ?
                        <button className='btn-contacto' onClick={navigateToCursos}>Saiba mais &gt;</button> : <div></div>}
                </div>
            </motion.div>

        </section>
    )
}
