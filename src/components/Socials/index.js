import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Socials = () => {
    
    return (
        <div id='socials' className='m-0 p-0'>
            <ul className="social-networks square spin-icon">
                <li>
                    <div>
                        <span>cgomezcolmenero@gmail</span>
                    </div>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/carlos-gomez-colmenero/"> 
                        <FontAwesomeIcon className='text-color' icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/golmenero">
                        <FontAwesomeIcon className='text-color' icon={faGithub} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;