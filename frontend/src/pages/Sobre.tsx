import '../styles/Sobre.css'
import foto from '../resources/IMG_3202.webp'
import logoWells from '../resources/drwells-logo.webp'
import logoSimsmile from '../resources/simsmile.webp'
import logoSNS from '../resources/SNS.webp'
import { Timeline } from '../components/Timeline/Timeline'
import { motion } from "framer-motion"


export const Sobre = () => {
    return (
        <div className='sobre'>
            <div
                className="sobre-andre">
                <motion.div animate={{ x: ["-50%", "0%"], opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ x: "-80%", opacity: 0 }} className="sobre-andre-left">
                    <h1 className='sobre-andre-heading'>
                        Dr. André Vilela Alves
                    </h1>
                    <div className="sobre-andre-text">
                        <p>O meu nome é André Vilela Alves e sou Médico Dentista.</p>
                        <p>Desde 2020 que exerço a profissão que desde cedo me cativou, uma vez que permite transformar vidas.</p>
                        <p>Ao longo do meu percurso, envolvi-me em vários projetos. Desde organização de congressos, projetos de voluntariado, associativismo, liderança em equipas de publicidade, entre outras.</p>
                        <p>Estas atividades permitiram-me desenvolver várias soft skills: tornaram-me mais dinâmico, interessado e rigoroso. Em simultâneo, desenvolvi uma extrema vontade em fazer sempre mais e melhor.</p>
                        <p>Atualmente na minha profissão, dedico-me maioritariamente às áreas de Cirurgia Oral, Implantologia e Patologia Oral.</p>
                    </div>
                </motion.div>
                <motion.div animate={{ x: ["50%", "0%"], opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ x: "80%", opacity: 0 }} className="sobre-andre-right">
                    <img src={foto} alt="Foto Dr. André Vilela Alves" className='sobre-andre-img' />
                </motion.div>
            </div>
            <div className="sobre-trabalho">
                <hr className="horizontal-line-sobre" />

                <h2 className='sobre-trabalho-heading'>Onde me encontrar</h2>
                <div className="sobre-trabalho-info">
                    <div className="sobre-trabalho-texto">
                        <p>Atualmente, exerço Medicina Dentária em vários locais, maioritariamente na zona metropolitana de Lisboa:</p>
                        <ul>
                            <li>Hospital Pulido Valente - USF das Conchas</li>
                            <li>Alfragide - Clínica Dr. Wells</li>
                            <li>Infantado - Clínica SimSmile</li>
                            <li>Mafra - Clínica SimSmile</li>
                        </ul>
                    </div>
                    <div className="sobre-trabalho-logos">
                        <img src={logoSNS} alt="Hospital Pulido valente logo" className='logo logoSNS' />
                        <img src={logoWells} alt="Dr Wells logo" className='logo logoWells' />
                        <img src={logoSimsmile} alt="SimSmile logo" className='logo logoSimsmile' />
                    </div>
                </div>
            </div>
            <div className="sobre-formação">
                <Timeline />
            </div>
        </div>
    )
}
