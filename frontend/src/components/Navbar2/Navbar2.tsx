import React, {useState} from 'react'
import './Navbar2.css'
import { Link, useLocation } from 'react-router-dom'


const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const className = isActive ? 'active1' : '';
    return <Link to={to} className={className}>{children}</Link>;
}

export const Navbar2 = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    return (
        <nav className="navbar">
            <Link to='/' className='navbar-logo'>Dr André</Link>
            <a className="toggle-button" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`navbar-links ${isMenuActive ? 'active' : ''}`}>
                <ul>
                    <li onClick={toggleMenu}><CustomLink to='/areas'>Áreas</CustomLink></li>
                    <li onClick={toggleMenu}><CustomLink to='/cursos'>Cursos</CustomLink></li>
                    <li onClick={toggleMenu}><CustomLink to='/sobre'>Sobre</CustomLink></li>
                    <li onClick={toggleMenu}><CustomLink to='/contactos'>Contactos</CustomLink></li>
                </ul>
            </div>
        </nav>
    )
}
