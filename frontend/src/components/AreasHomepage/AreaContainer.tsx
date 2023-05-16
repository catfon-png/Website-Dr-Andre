import React from 'react'
import implants from '../../resources/implants (2).png'
import dentist from '../../resources/dentist.png'
import tongue from '../../resources/tongue.png'
import { AreaMD } from './AreaMD'
import './AreaContainer.css'

export const AreaContainer = () => {
    const allAreas = [[dentist, 'Cirurgia Oral', 'Área da Medicina Dentária que se dedica ao diagnóstico e tratamento cirúrgico das doenças, lesões e anomalias dos dentes, boca, maxilares e estruturas anexas'], 
                      [implants, 'Implantologia', 'Área da Medicina Dentária que se dedica à reabilitação de dentes ausentes'], 
                      [tongue, 'Patologia Oral', 'Área da Medicina Dentária que se dedica ao diagnóstico e tratamento das lesões da cavidade oral que podem afetar o osso, a gengiva, a língua, os lábios e as glândulas salivares']]
  return (
    <div className='area-container'>
        {allAreas.map(([img, title]) =>
        <AreaMD image={img} title={title}/>)}
    </div>
  )
}
