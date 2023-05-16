// import fotoAndre from '../../resources/foto-andre.png'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import './ContactoAndre.css'

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


    return (
        <div className='contacto'>
            <img src={foto} alt={descriçãoFoto} className="contacto-img"/>
            <div className="contacto-text">
                <h2 className="contacto-title">{titulo}</h2>
                <div className="email">
                    <HiOutlineMail size={32} color="#2B4C68" className='icon' />
                    <p>{email}</p>
                </div>
                <div className="instagram">
                    <a href={iglink} target="_blank">
                        <AiFillInstagram size={34} className='icon' />
                        <p>{instagram}</p>
                    </a>
                </div>
                {lilink ?
                    <div className="linkedin">
                        <a href={lilink} target="_blank">
                            <BsLinkedin size={26} className='icon'/>
                            <p>{linkedin}</p>
                        </a>
                    </div>
                    :
                    <div></div>}
            </div>
        </div>
    )
}
