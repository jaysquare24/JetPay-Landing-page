export const Content = ({ imgSrc, title, subtitle, description }) => {
    return(
        <div className="content">
            {imgSrc && 
            <div className="content-icon-container">
                <img className="content-icon" src={imgSrc} alt="Content Icon"/>
            </div>
            }
            <h3 className="content-title">{title}</h3>
            {subtitle && <h4 className="content-subtitle">{subtitle}</h4>}
            <p className="content-description">{description}</p>
        </div>
    )
}