import './AreaMD.css'

type AreaProps = {
    image: string,
    title: string,
    description: JSX.Element,
}

export const AreaMD = ({ image, title, description }: AreaProps) => {
    return (
        <div className='area'>
            <img src={image} alt={title} className='area-img' />
            <div className="area-text">
                <h2 className="area-title">{title}</h2>
                {description}
            </div>
        </div>
    )
}
