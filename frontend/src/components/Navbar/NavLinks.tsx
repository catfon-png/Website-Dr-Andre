import React from 'react' 
import { Link, useLocation } from 'react-router-dom'
import classes from './NavBar.module.css'


const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const className = isActive ? 'active' : '';
    return <Link to={to} className={className}>{children}</Link>;
}

export const NavLinks = () => {
    return (
        <ul className={classes.NavBarLinks}>
            <li><CustomLink to='/areas'>Áreas</CustomLink></li>
            <li><CustomLink to='/cursos'>Cursos</CustomLink></li>
            <li><CustomLink to='/sobre'>Sobre</CustomLink></li>
            <li><CustomLink to='/contactos'>Contactos</CustomLink></li>
            {/* <button className='navbar-close-btn'> <FaTimes size={25} /></button> */}
        </ul>
    )
}