import React from 'react'
import './AreaMD.css'

type AreaProps = {
    image: string,
    title: string,
    // description: string
}

export const AreaMD = ({image, title} : AreaProps) => {
    return (
        <div className='area'>
            <img src={image} alt=''/>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
        </div>
    )
}
