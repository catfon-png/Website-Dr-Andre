import React from 'react'
import implants from '../../resources/implants (2).png'
import dentist from '../../resources/dentist.png'
import tongue from '../../resources/tongue.png'
import { AreaMD } from './AreaMD'
import './AreaContainer.css'

export const AreaContainer = () => {
    const allAreas = [[dentist, 'Cirurgia Oral', 'Descrição'], [implants, 'Implantologia', 'Descrição'], [tongue, 'Patologia Oral', 'Descrição']]
  return (
    <div className='area-container'>
        {allAreas.map(([img, title, description]) =>
        <AreaMD image={img} title={title} description={description}/>)}
    </div>
  )
}
