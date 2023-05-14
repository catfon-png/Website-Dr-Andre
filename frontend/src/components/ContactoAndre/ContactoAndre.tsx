// import fotoAndre from '../../resources/foto-andre.png'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import './ContactoAndre.css'

type ContactProps = {
    foto: string,
    descriçãoFoto: string,
    email: string,
    iglink: string,
    instagram: string,
    lilink?: string,
    linkedin?: string
}

export const ContactoAndre = ({foto, descriçãoFoto, email, iglink, instagram, lilink, linkedin} : ContactProps) => {


    return (
        <div className='contacto-andre'>
            <img src={foto} alt={descriçãoFoto} />
            <div className="email">
                <HiOutlineMail size={30} color="#2B4C68"/>
                <p>{email}</p>
            </div>
            <div className="instagram">
                <a href={iglink} target="_blank">
                    <AiFillInstagram size={32} />
                <p>{instagram}</p>
                </a>
            </div>
            {lilink ? 
            <div className="linkedin">
                <a href={lilink} target="_blank">
                    <BsLinkedin size={28} />
                <p>{linkedin}</p>
                </a>
            </div>
            : 
            <div></div> }
        </div>
    )
}
