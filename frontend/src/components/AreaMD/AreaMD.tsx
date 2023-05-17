type AreaProps = {
    image: string,
    title: string,
    description: JSX.Element,
}

export const AreaMD = ({ image, title, description }: AreaProps) => {
    return (
        <div className='area'>
            <div className="area-img">
                <img src={image} alt={title} />
            </div>
            <div className="area-text">
                <h2 className="area-title">{title}</h2>
                {description}
            </div>
        </div>
    )
}
