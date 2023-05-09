import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footer-left'>
                <h3>Contactos</h3>
                <div className='footer-left-contact-info'>
                    <p>andrevilelalves@gmail.com</p>
                    <p>+351 964 652 648</p>
                </div>
            </div>
            <div className='footer-right'>
                <a href='https://www.instagram.com/andrevilelalves_dds/' target="_blank">
                    <AiFillInstagram size={30} />
                </a>
                <a href='https://www.linkedin.com/in/andrevilelalves/' target="_blank">
                    <BsLinkedin size={28} />
                </a>
            </div>
        </footer>
    )
}
