import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {

    return (
        <footer>
            <div className='footer-left'>
                <h3 className='footer-left-contact-heading'>Contactos</h3>
                <p className='footer-left-contact-email'>andrevilelalves@gmail.com</p>
            </div>
            <div className='footer-right'>
                <a href='https://www.instagram.com/andrevilelalves_dds/' target="_blank">
                    <AiFillInstagram size={32} />
                </a>
                <a href='https://www.linkedin.com/in/andrevilelalves/' target="_blank">
                    <BsLinkedin size={28} />
                </a>
            </div>
        </footer>
    )
}
