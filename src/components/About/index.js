import { faGlobe, faGraduationCap, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { Col, Container, Row } from 'reactstrap';
import AboutItem from './AboutItem';
import './index.scss';
import { useTranslation } from "react-i18next";

const About = () => {
    const [t] =  useTranslation("global");
    
    return (
        <>
            <Container>
                <Row className='fade-in-first'>
                    <h1 className='highlighted-text'>{ t("navigation.about") }</h1>
                    <p className='section-subtitle text-m'>{ t("about.header") }</p>
                </Row>
                <Row>
                    <Col>
                        <AboutItem icon={faGraduationCap} title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                    </Col>
                    <Col>
                        <AboutItem icon={faGlobe} title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                    </Col>
                    <Col>
                        <AboutItem icon={faKeyboard} title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
                    </Col>
                </Row>
            </Container>
            <Loader type="ball-scale-ripple-multiple" />
        </>
       
    )
}

export default About;