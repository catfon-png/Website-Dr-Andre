import './Navbar.css'

import { Link, NavLink, useLocation } from 'react-router-dom'

const CustomLink = ({ to, children} : { to: string; children: React.ReactNode }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const className = isActive ? 'active' : '';
    return <Link to={to} className={className}>{children}</Link>;
}

export const Navbar = () => {
    const path = window.location.pathname
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>Dr André</Link>
            <ul>
                <li><CustomLink to='/areas'>Áreas de Atuação</CustomLink></li>
                <li><CustomLink to='/cursos'>Cursos</CustomLink></li>
                <li><CustomLink to='/sobre'>Sobre</CustomLink></li>
                <li><CustomLink to='/contactos'>Contactos</CustomLink></li>
            </ul>
        </nav>
    )
}

