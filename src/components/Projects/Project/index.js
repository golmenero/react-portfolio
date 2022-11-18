import './index.scss';

const Project = ({ link, title, subtitle, img}) => {
    
    return (
        <div className='project'>
            <div>
                <h3 className='text-m bold-600'>{title}</h3>
                <p className='text-s'>{subtitle}</p>
                <img src={img} alt={title}></img>
            </div>
        </div>                 
    )
}

export default Project;