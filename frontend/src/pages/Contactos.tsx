import { ContactoAndre } from '../components/ContactoAndre/ContactoAndre'
import fotoAndre from '../resources/foto-andre.png'
import logoOPA from '../resources/opa black no bg.png'
import '../styles/Contactos.css'

export const Contactos = () => {
    const contactosAndre = [[fotoAndre, 'Dr. André Vilela Alves', 'foto médico dentista André Alves', 'andrevilelalves@gmail.com', 'https://www.instagram.com/andrevilelalves_dds/', 'andrevilelalves_dds', 'https://www.linkedin.com/in/andrevilelalves/', 'andrevilelalves'], [logoOPA, 'Oral Pathology Academy', 'foto OPA', 'oralpathologyacademy@gmail.com', 'https://www.instagram.com/oralpathologyacademy/', 'oralpathologyacademy']]
    return (
        <>
            <h2>Contactos</h2>
            <div className='contactos'>
                {contactosAndre.map(([foto, titulo, descriçãoFoto, email, iglink, instagram, lilink, linkedin]) =>
                    <ContactoAndre foto={foto} titulo={titulo} descriçãoFoto={descriçãoFoto} email={email} iglink={iglink} instagram={instagram} lilink={lilink} linkedin={linkedin} />
                )}
            </div>
        </>
    )
}
