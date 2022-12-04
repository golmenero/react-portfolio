import { Col, Row } from 'reactstrap';
import AboutItem from './AboutItem';
import './index.scss';
import { useTranslation } from "react-i18next";
import { faGlobe, faGraduationCap, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="about">
            <Row className='fade-in-first'>
                <h1 className='accent-color'>{ t("navigation.about") }</h1>
                <p className='section-subtitle text-m'>{ t("about.header") }</p>
            </Row>
            <Row>
                <Col sm="12" md="6">
                    <AboutItem title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                    <AboutItem title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                    <AboutItem title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
                </Col>
                <Col sm="12" md="6" className='col-carousel'>
                    <Col sm="12">
                        
                    </Col>
                </Col>
            </Row>
        </section>
       
    )
}

export default About;