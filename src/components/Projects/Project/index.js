import './index.scss';

const Project = ({ link, title, subtitle, img}) => {
    
    return (
        <a href={link} className={`border project ${img}`}>
            <div>
                <h3 className='text-m bold-600'>{title}</h3>
                <p className='text-s justify'>{subtitle}</p>
            </div>
        </a>                 
    )
}

export default Project;