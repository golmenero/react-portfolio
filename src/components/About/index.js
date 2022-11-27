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
                <Row>
                    <Col sm="12" md="9">
                        <h1 className='fade-in-first text-l justify'>
                            <span className='highlighted-text'>{ t("about.hello") }</span> <br/> { t("about.header") }
                        </h1>
                        <div className='fade-in-second'>
                            <p className='justify text-m'>{ t("about.description") }</p>
                            <p className="quote text-l">{ t("about.quote") }</p>
                        </div>
                    </Col>
                    <Col sm="12" md="3">
                        <img className='fade-in-first' alt="Profile" src='profile.jpeg'/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="4">
                        <AboutItem icon={faGraduationCap} title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                    </Col>
                    <Col sm="12" md="4">
                        <AboutItem icon={faGlobe} title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                    </Col>
                    <Col sm="12" md="4">
                        <AboutItem icon={faKeyboard} title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
                    </Col>
                </Row>
            </Container>
            <Loader type="ball-scale-ripple-multiple" />
        </>
       
    )
}

export default About;