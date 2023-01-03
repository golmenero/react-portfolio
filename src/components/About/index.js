import { Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const AboutItem = ({ icon, title, subtitle}) => {
    
    return (
        <Col className="mb-20" sm="12" md="12" lg="4">
            <Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
                    <div className="card-panel">
                        <i className={icon}></i>
                        <h2 className='heading-2'>{ title }</h2>
                        <p className='heading-3'> { subtitle }</p>
                    </div>
            </Tilt>
        </Col>
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
                <AboutItem icon="bx bxs-graduation" title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                <AboutItem icon="bx bx-globe" title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                <AboutItem icon="bx bx-wrench" title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
            </Row>
        </section>
    )
}

export default About;