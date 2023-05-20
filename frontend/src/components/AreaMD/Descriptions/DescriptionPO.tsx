import { useState, useEffect } from 'react'
import './Descriptions.css'

export const DescriptionPO = () => {
    const [isHomepage, setIsHomepage] = useState(true);
    useEffect(() => {
        setIsHomepage(window.location.pathname === '/')
    })
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseOver = () => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div className='area-description' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {!isHomepage ? <div className="area-description-long">
                <p>A Patologia Oral é a área da medicina dentária que se dedica ao diagnóstico e tratamento das lesões da cavidade oral que podem afetar o osso, a gengiva, a língua, os lábios e as glândulas salivares.</p>
                <p>Nesta consulta, podem ser avaliadas ainda as manifestações orais dos efeitos adversos dos medicamentos, alterações salivares, infeções virais, infeções fúngicas, assim como as manifestações orais de doenças sistémicas.</p>
                <p>É bastante comum nesta consulta, a necessidade da realização de exames complementares de diagnóstico incluindo, sempre que haja indicação clínica, a biópsia.</p>
                <p>Esta última irá contribuir para a confirmação do diagnóstico que será determinante na planificação do tratamento.</p>
            </div> :
            <div>
                <p className="area-description-short">Área da Medicina Dentária que se dedica ao diagnóstico e tratamento das lesões da cavidade oral que podem afetar o osso, a gengiva, a língua, os lábios e as glândulas salivares</p>
                
            </div>}
        </div>
    )
}
