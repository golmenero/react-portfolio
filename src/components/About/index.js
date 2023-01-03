import { Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const AboutItem = ({ icon, title, subtitle}) => {
    
    return (
        <Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
            <div className="card-panel">
                <i className={icon}></i>
                <h2 className='heading-2'>{ title }</h2>
                <p className='heading-3'> { subtitle }</p>
            </div>
        </Tilt>
    )
}

const About = () => {
    const [t] =  useTranslation("global");

    return (
        <section id="about" className='animate-on-scroll' data-nav="about">
            <Row>
                <h1 className='heading-1'>{ t("navigation.about") }</h1>
                <p className='heading-3'>{ t("about.header") }</p>
            </Row>
            <Row>
                <Col sm="12" md="12" lg="4">
                    <AboutItem icon="bx bxs-graduation" title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                </Col>
                <Col sm="12" md="12" lg="4">
                    <AboutItem icon="bx bx-globe" title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                </Col>
                <Col sm="12" md="12" lg="4">
                    <AboutItem icon="bx bx-wrench" title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
                </Col>
            </Row>
        </section>
       
    )
}

export default About;