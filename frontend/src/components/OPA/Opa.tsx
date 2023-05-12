import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Opa.css'
import logo from '../../resources/opa black no bg.png'

export const Opa = () => {
    const navigate = useNavigate();
    const navigateToContacts = () => {
        // navigate('/contactos')
        console.log(window.location.pathname)
    }


    return (
        <section className='opa'>
            <div className='opa-left'>
                <img src={logo} alt="Oral Pathology Academy Logo" />
                <div className='opa-buttons'>
                    <button className='btn-inscrever'>Inscreva-se</button>
                    <button className='btn-contacto' onClick={navigateToContacts}>Entre em contacto</button>
                </div>
            </div>
            <div className='opa-right'>
                <h1 className="opa-heading">Oral Pathology Academy</h1>
                {window.location.pathname === '/cursos' ?
                    <div className='opa-long-text'>
                        <p>OPA, a academia que pretende descomplicar a patologia oral. </p>
                        <p> O cancro oral é o sexto mais comum no mundo, contudo, continua a ser diagnosticado em estadios muito avançados com impacto severo na qualidade de vida dos pacientes, podendo até causar a morte.</p>
                        <p>O Médico dentista é o profissional por eleição no diagnóstico de patologias da cavidade oral e no despiste de lesões potencialmente malignas. </p>
                        <p>Ao longo do meu trajeto enquanto Médico Dentista, tenho-me dedicado a esta área e a Oral Pathology Academy (OPA) surge com o objetivo de mudar este paradigma.
                            A nossa missão consiste em capacitar o Médico dentista a identificar e tratar as lesões da cavidade oral, assim como a sinalizar precocemente uma lesão potencialmente maligna.
                            Este projeto nasce de uma vontade de descomplicar a patologia oral, e irá debruçar-se sobre o estudo das patologias mais frequentes em consultório e respetivo tratamento.</p>
                        <p>O nosso primeiro curso, “Introdução à Patologia Oral Clínica” irá ocorrer nos dias 16 e 17 de Junho, em Lisboa.</p>
                        <p>Este curso é dirigido a Médicos Dentistas, Médicos Estomatologistas, Médicos de Medicina Geral e Familiar e ainda estudantes destas áreas.</p>
                        <p>Pretende ser um curso bastante prático e interativo, pelo que as vagas são limitadas.</p>
                        <p>Convidamos os leitores a iniciar esta viagem da Patologia Oral ou a fazer um refresh aos seus conhecimentos.</p>
                    </div>
                    : <div className='opa-short-text'>
                        <p>Fundador desta academia cuja missão consiste em descomplicar a patologia oral. </p>
                        <p>O primeiro curso desta academia irá ocorrer a 16 e 17 de junho de 2023, em Lisboa.</p>
                    </div>}
            </div>
        </section >
    )
}
