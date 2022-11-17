import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';


const Skill = ({ icon, color, text, position}) => {
    
    return (
        <div className={`skill ${position}`}>
            <div className='left m-15px'>
                <FontAwesomeIcon icon={icon} className="icon-skill" color={color}/>
            </div>
            <div className='text-m bold'>
                <p className='left'>{text}</p>
            </div>
        </div>                 
    )
}

export default Skill;