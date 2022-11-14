import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
    <div className='nav-bar'>
        <nav>
            <div className='nav-bar-left'>
                <span>Carlos Gómez</span>
            </div>
            <div className='nav-bar-center'>
                <NavLink exact="true" activeclassname="active" to="/">About</NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/skills">Skills</NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/projects">Projects</NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">Contact Me</NavLink>
            </div>
            <div className='nav-bar-right'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlos-gomez-colmenero/">
                        <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/golmenero">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </nav>    
    </div>
);

export default Navbar;