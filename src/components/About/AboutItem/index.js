import './index.scss';
import './index.scss';
import { Col, Row } from 'reactstrap';


const AboutItem = ({ title, subtitle}) => {
    
    return (
        <Row>
            <Col sm="12">
                <h2 className='text-m justify'>
                    <span className='accent-color'>{ title }</span>
                </h2>
            </Col>
            <Col sm="12">
                <p className='text-s'> { subtitle }</p>
            </Col>
        </Row>
    )
}

export default AboutItem;