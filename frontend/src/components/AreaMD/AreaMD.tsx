import './AreaMD.css'

type AreaProps = {
    image: string,
    title: string,
    description: JSX.Element,
}

export const AreaMD = ({ image, title, description }: AreaProps) => {
    return (
        <div className='area'>
            <div className="area-img">
                <a href="/areas">
                <img src={image} alt={title} />
                </a>
            </div>
            <div className="area-text">
            
                <h2 className="area-title">
                <a href="/areas">{title}</a></h2>
                

                {description}
            </div>
        </div>
    )
}
