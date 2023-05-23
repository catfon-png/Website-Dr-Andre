import { useRef, useState } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'


const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const className = isActive ? 'active' : '';
    return <Link to={to} className={className}>{children}</Link>;
}

export const Navbar = () => {
    const [burgerClass, setBurgerClass] = useState('hamburger-menu unclicked');
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('hamburger-menu clicked');
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('hamburger-menu unclicked')
            setMenuClass('menu hidden')

        }
    }
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>Dr André</Link>
            <div className='slider'>
                <ul className='navbar-links'>
                    <li><CustomLink to='/areas'>Áreas</CustomLink></li>
                    <li><CustomLink to='/cursos'>Cursos</CustomLink></li>
                    <li><CustomLink to='/sobre'>Sobre</CustomLink></li>
                    <li><CustomLink to='/contactos'>Contactos</CustomLink></li>
                    {/* <button className='navbar-close-btn'> <FaTimes size={25} /></button> */}
                </ul>
            </div>
            <a href="#" className="toggle-btn">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            {/* <button className='navbar-ham-menu' onClick={updateMenu}> <FaBars size={25} /></button> */}
        </nav>
    )
}

