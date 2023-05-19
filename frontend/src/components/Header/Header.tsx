import './Header.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className="header-left">
                <h1 className="header-title">Dr. André Vilela Alves</h1>
                <h3 className="header-subtitle">Médico Dentista</h3>
                <button className="header-btn">Mais informação</button>
            </div>
            <div className="header-right">
                <img src="" alt="ainda não há imagem" />
            </div>
        </header>
    )
}
