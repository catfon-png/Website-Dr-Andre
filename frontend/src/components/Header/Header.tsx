import './Header.css'
import { motion } from "framer-motion"
import andre from '../../resources/andre-2.png'


export const Header = () => {
    return (
        <header>
            <div className="header-left">
                <h1 className="header-title">Dr. André Vilela Alves</h1>
                <h3 className="header-subtitle">Médico Dentista</h3>
                <button className="header-btn">Mais informação</button>
            </div>
            <div className="header-right">
                <img src={andre} alt="ainda não há imagem" className='header-img'/>
            </div>
        </header>
    )
}
