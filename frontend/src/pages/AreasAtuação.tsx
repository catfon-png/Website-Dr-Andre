import { AreaMD } from '../components/AreaMD/AreaMD'
import implants from '../resources/implants (2).png'
import dentist from '../resources/dentist.png'
import tongue from '../resources/tongue.png'
import '../styles/AreasAtuação.css'
import { DescriptionCO } from '../components/AreaMD/Descriptions/DescriptionCO'
import { DescriptionImp } from '../components/AreaMD/Descriptions/DescriptionImp'
import { DescriptionPO } from '../components/AreaMD/Descriptions/DescriptionPO'

export const AreasAtuação = () => {
    const allAreas: [string, string, JSX.Element][] = [[dentist, 'Cirurgia Oral', <DescriptionCO />],
    [implants, 'Implantologia', <DescriptionImp />],
    [tongue, 'Patologia Oral', <DescriptionPO />]]

    return (
        <div className='area-atuação'>
            <h1 className='area-atuação-heading'>Áreas de atuação</h1>
            {allAreas.map(([img, title, description]) =>
                <AreaMD image={img} title={title} description={description} />)}

        </div>
    )
}
