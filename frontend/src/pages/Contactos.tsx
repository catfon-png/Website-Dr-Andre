import React from 'react'
import { ContactoAndre } from '../components/ContactoAndre/ContactoAndre'
import fotoAndre from '../resources/foto-andre.png'
import './Contactos.css'

export const Contactos = () => {
    const contactosAndre = [[fotoAndre, 'foto médico dentista André Alves', 'andrevilelalves@gmail.com', 'https://www.instagram.com/andrevilelalves_dds/', 'andrevilelalves_dds', 'https://www.linkedin.com/in/andrevilelalves/', 'andrevilelalves'], [fotoAndre, 'foto OPA', 'oralpathologyacademy@gmail.com', 'https://www.instagram.com/oralpathologyacademy/', 'oralpathologyacademy']]
    return (
        <>
            <h2>Contactos</h2>
            <div className='contactos'>
                {contactosAndre.map(([foto, descriçãoFoto, email, iglink, instagram, lilink, linkedin]) =>
                    <ContactoAndre foto={fotoAndre} descriçãoFoto={descriçãoFoto} email={email} iglink={iglink} instagram={instagram} lilink={lilink} linkedin={linkedin} />
                )}
            </div>
        </>
    )
}
