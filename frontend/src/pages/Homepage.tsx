import React from 'react'
import implants from '../resources/implants (2).png'
import dentist from '../resources/dentist.png'
import tongue from '../resources/tongue.png'
import { Question } from '../components/Question/Question'
import { Opa } from '../components/OPA/Opa'
import { DescriptionCO } from '../components/AreaMD/Descriptions/DescriptionCO'
import { DescriptionImp } from '../components/AreaMD/Descriptions/DescriptionImp'
import { DescriptionPO } from '../components/AreaMD/Descriptions/DescriptionPO'
import { AreaMD } from '../components/AreaMD/AreaMD'
import '../styles/Homepage.css'
import { Header } from '../components/Header/Header'

export const Homepage = () => {
  const allAreas: [string, string, JSX.Element][] = [[dentist, 'Cirurgia Oral', <DescriptionCO />],
  [implants, 'Implantologia', <DescriptionImp />],
  [tongue, 'Patologia Oral', <DescriptionPO />]]
  return (
    <div>
      <Header />
      <section className='area-container'>
        {allAreas.map(([img, title, description]) =>
          <AreaMD image={img} title={title} description={description} />)}
      </section>
      <Opa />
      <Question />
    </div>
  )
}
