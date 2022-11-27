import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'reactstrap';
import './index.scss';

const Footer = () => {

    return (
      <div id='footer'>
        <Row>
            <Col sm="12" className='m-0'>
                <p className='text-s highlighted-text bold-600'>
                  <FontAwesomeIcon icon={faEnvelope}/>cgomezcolmenero@gmail.com
                </p>
            </Col>
        </Row>
      </div>
    );
  };
  
  export default Footer;