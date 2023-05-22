import React from 'react'
import implants from '../resources/implants (2).webp'
import dentist from '../resources/dentist.webp'
import tongue from '../resources/tongue.webp'
import { Question } from '../components/Question/Question'
import { Opa } from '../components/OPA/Opa'
import { DescriptionCO } from '../components/AreaMD/Descriptions/DescriptionCO'
import { DescriptionImp } from '../components/AreaMD/Descriptions/DescriptionImp'
import { DescriptionPO } from '../components/AreaMD/Descriptions/DescriptionPO'
import { AreaMD } from '../components/AreaMD/AreaMD'
import '../styles/Homepage.css'
import { Header } from '../components/Header/Header'

export const Homepage = () => {
  const allAreas: [string, string, JSX.Element][] = 
  [[dentist, 'Cirurgia Oral', <DescriptionCO />],
  [implants, 'Implantologia', <DescriptionImp />],
  [tongue, 'Patologia Oral', <DescriptionPO />]]
  return (
    <div>
      <Header />
      <section className="areas">
        <h2 className="areas-title">Áreas de Atuação</h2>
        <div className='areas-container'>
          {allAreas.map(([img, title, description]) =>
            <AreaMD image={img} title={title} description={description} />)}
        </div>
      </section>
      <Opa />
      <Question />
    </div>
  )
}
