import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';


const AboutItem = ({ icon, title, subtitle}) => {
    
    return (
        <div className='fade-in-third about-item centered p-2em'>
            <div>
                <FontAwesomeIcon icon={icon} className="icon-about-item" color="#999999"/>
            </div>
            <div>
                <h3 className='text-m bold-600'>{title}</h3>
                <p className='text-s justify'>{subtitle}</p>
            </div>
        </div>                 
    )
}

export default AboutItem;