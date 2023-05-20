import { useState, useEffect } from 'react'

export const DescriptionImp = () => {
    const [isHomepage, setIsHomepage] = useState(true);
    useEffect(() => {
        setIsHomepage(window.location.pathname === '/')
    })
    return (
        <div className='area-description'>
            {!isHomepage ? <div className="area-description-long">
                <p>A Implantologia é a área da medicina dentária que se dedica à reabilitação de dentes ausentes.</p>
                <p>Os tratamentos neste âmbito consistem na colocação de “raízes artificiais”, designados implantes dentários no osso e que irão funcionar como suporte aos “novos dentes”. Estes podem ser coroas  unitárias ou próteses fixas, totais ou parciais.</p>
                <p>A ausência parcial ou total de dentes, tem um impacto severo na qualidade de vida dos pacientes, comprometendo normal função e estética, com consequências na saúde dos pacientes.</p>
                <p>Os implantes são então, uma das diversas alternativas existentes, para a substituição de dentes perdidos.</p>
                <p>Cada caso será dotado de uma especificidade única, pelo que deverá ser realizada uma planificação extensa do procedimento cirúrgico e posterior reabilitação, com recurso a meios auxiliares de diagnóstico, como a tomografia computorizada de feixe cónico, por exemplo.</p>
            </div> :
                <p className="area-description-short">Área da Medicina Dentária que se dedica à reabilitação de dentes ausentes</p>}
        </div>
    )
}
