import './Header.css'
import { motion } from "framer-motion"
import andre from '../../resources/andre1.png'


export const Header = () => {
    
    return (
        <header>
            <motion.div  animate={{ x: ["-50%", "0%"], opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ x: "-80%", opacity: 0 }} className="header-left">
                <h1 className="header-title">Dr. André Vilela Alves</h1>
                <h3 className="header-subtitle">Médico Dentista</h3>
                <button className="header-btn">Mais informação</button>
            </motion.div>
            <motion.div animate={{ x: ["50%", "0%"], opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ x: "80%", opacity: 0 }} className="header-right">
                <img src={andre} alt="ainda não há imagem" className='header-img'/>
            </motion.div>
        </header>
    )
}
