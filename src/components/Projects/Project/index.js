import './index.scss';

const Project = ({ link, title, subtitle, img}) => {
    
    return (
        <div className={`project ${img}`}>
            <a href={link}>
                <div>
                    <h3 className='text-m bold-600'>{title}</h3>
                    <p className='text-s justify'>{subtitle}</p>
                </div>
            </a>      
        </div>
    )
}

export default Project;