import { useState, useEffect }from 'react'

export const DescriptionCO = () => {
    const [isHomepage, setIsHomepage] = useState(true);
    useEffect(() => {
        setIsHomepage(window.location.pathname === '/')
    })
  return (
    <div className='area-description'>
        {!isHomepage ? <div className="area-description-long">
    <p>A cirurgia oral é a área da medicina dentária que se dedica ao diagnóstico e tratamento cirúrgico das doenças, lesões e anomalias dos dentes, boca, maxilares e estruturas anexas.</p>
    <p>Para uma eficaz resolução de casos mais complexos, pode ser necessária a integração com outras áreas de intervenção da medicina dentária, como a patologia oral.</p>
    <p>Os tratamentos mais frequentes passam pelos seguintes:</p>
    <ul>
        <li>Extração de dentes (exodontia);</li>
        <li>Remoção de quistos e tumores;</li>
        <li>Tratamento de deformações ósseas e dentárias;</li>
        <li>Tratamento de lesões periapicais, através de cirurgias apicais (apicetomias);</li>
        <li>Frenectomias (eliminação cirúrgica total de um freio);</li>
        <li>Trações cirúrgicas de dentes inclusos, etc.</li>
    </ul> </div>: 
    <p className="area-description-short">Área da Medicina Dentária que se dedica ao diagnóstico e tratamento cirúrgico das doenças, lesões e anomalias dos dentes, boca, maxilares e estruturas anexas'</p>}
</div>
  )
}
