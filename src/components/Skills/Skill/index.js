import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';


const Skill = ({ icon, title, subtitle}) => {
    
    return (
        <div className='skill centered p-2em'>
            <div>
                <FontAwesomeIcon icon={icon} className="icon-skill" color="#999999"/>
            </div>
            <div>
                <h3 className='text-m bold-600'>{title}</h3>
                <p className='text-s'>{subtitle}</p>
            </div>
        </div>                 
    )
}

export default Skill;