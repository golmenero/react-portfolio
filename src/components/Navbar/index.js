import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
    <div className='nav-bar'>
        <nav>
            <div className='nav-bar-left w-25'>
                <a exact="true" activeclassname="active" href="#about">&lt; Carlos Gómez /&gt;</a>
            </div>
            <div className='nav-bar-center w-50'>
                <a exact="true" activeclassname="active" href="#about">About</a>
                <a exact="true" activeclassname="active" className="about-link" href="#skills">Skills</a>
                <a exact="true" activeclassname="active" className="contact-link" href="#projects">Projects</a>
                <a exact="true" activeclassname="active" className="contact-link" href="#contact">Contact Me</a>
            </div>
            <div className='nav-bar-right w-25'>
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