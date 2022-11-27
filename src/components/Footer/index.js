import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'reactstrap';
import './index.scss';

const Footer = () => {

    return (
      <div id='footer'>
        <Row>
            <Col sm="12" className='m-0'>
              <div>
                <span className='text-m highlighted-text bold-600'>
                  cgomezcolmenero@gmail.com
                  <div>
                    <a href="https://www.linkedin.com/in/carlos-gomez-colmenero/"> 
                      LinkedIn <FontAwesomeIcon className='highlighted-text' icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/golmenero">
                      GitHub <FontAwesomeIcon className='highlighted-text' icon={faGithub} />
                    </a>
                  </div>
                </span>
              </div>
            </Col>
        </Row>
      </div>
    );
  };
  
  export default Footer;