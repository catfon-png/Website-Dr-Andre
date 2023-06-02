import { ContactoAndre } from '../components/ContactoAndre/ContactoAndre'
import fotoAndre from '../resources/foto-andre.webp'
import logoOPA from '../resources/opa-black-no-bg.webp'
import '../styles/Contactos.css'
import { motion } from 'framer-motion';


export const Contactos = () => {
    const contactosAndre = [[fotoAndre, 'Dr. André Vilela Alves', 'foto médico dentista André Alves', 'andrevilelalves@gmail.com', 'https://www.instagram.com/andrevilelalves_dds/', 'andrevilelalves_dds', 'https://www.linkedin.com/in/andrevilelalves/', 'andrevilelalves'], [logoOPA, 'Oral Pathology Academy', 'foto OPA', 'oralpathologyacademy@gmail.com', 'https://www.instagram.com/oralpathologyacademy/', 'oralpathologyacademy']]
    return (
        <div className='contactos-container' >
            <h2 className='contactos-heading'>Contactos</h2>
            <div className="scroller-container">
                <motion.div className='contactos' animate={{ x: ["-20%", "0%"], opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        initial={{ x: "-30%", opacity: 0 }}>
                    {contactosAndre.map(([foto, titulo, descriçãoFoto, email, iglink, instagram, lilink, linkedin]) =>
                        <ContactoAndre foto={foto} titulo={titulo} descriçãoFoto={descriçãoFoto} email={email} iglink={iglink} instagram={instagram} lilink={lilink} linkedin={linkedin} />
                    )}
                </motion.div>
            </div>

        </div>
    )
}
