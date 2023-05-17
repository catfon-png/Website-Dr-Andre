import '../styles/Sobre.css'
import foto from '../resources/IMG_3202.png'

export const Sobre = () => {
    return (
        <div className='sobre'>
            <div className="sobre-andre">
                <div className="sobre-andre-left">
                    <h1 className='sobre-andre-heading'>
                        Dr. André Vilela Alves
                    </h1>
                    <p>O meu nome é André Vilela Alves e sou Médico Dentista.</p>
                    <p>Desde 2020 que exerço a profissão que desde cedo me cativou, uma vez que permite transformar vidas.</p>
                    <p>Ao longo do meu percurso, envolvi-me em vários projetos. Desde organização de congressos, projetos de voluntariado, associativismo, liderança em equipas de publicidade, entre outras.</p>
                    <p>Estas atividades permitiram-me desenvolver várias soft skills: tornou-me mais dinâmico, interessado e rigoroso. Em simultâneo, também me deixou com extrema vontade em fazer sempre mais e melhor.</p>
                    <p>Atualmente na minha profissão, dedico-me maioritariamente às áreas de Cirurgia Oral, Implantologia e Patologia Oral.</p>
                </div>
                <div className="sobre-andre-right">
                    <img src={foto} alt="Foto Dr. André Vilela Alves" className='sobre-andre-img'/>
                </div>
            </div>
            <div className="sobre-trabalho">
                <h2 className='sobre-trabalho-heading'>Onde me encontrar</h2>
                <div className="sobre-trabalho-texto">
                    <p>Atualmente, exerço Medicina Dentária em vários locais, maioritariamente na zona metropolitana de Lisboa:</p>
                    <ul>
                        <li>Hospital Pulido Valente - USF das Conchas</li>
                        <li>Alfragide - Clínica Dr. Wells</li>
                        <li>Infantado - Clínica SimSmile</li>
                        <li>Mafra - Clínica SimSmile</li>
                    </ul>
                </div>
            </div>
            <div className="sobre-formação">
                
            </div>
        </div>
    )
}
