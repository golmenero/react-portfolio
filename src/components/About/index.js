import { Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";

const AboutItem = ({ img, title, subtitle}) => {
    
    return (
        <div data-img={img} className="animated-border section-color p-2em h-100">
            <h2 className='heading-2'>{ title }</h2>
            <p className='heading-3'> { subtitle }</p>
        </div>
    )
}

const About = () => {
    const [t] =  useTranslation("global");

    return (
        <section id="about" className='animate-on-scroll' data-nav="about">
            <Row>
                <h1 className='heading-1 text-white'>{ t("navigation.about") }</h1>
                <p className='heading-3'>{ t("about.header") }</p>
            </Row>
            <Row>
                <Col sm="12" md="4">
                    <AboutItem img="education" title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                </Col>
                <Col sm="12" md="4">
                    <AboutItem img="languages" title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                </Col>
                <Col sm="12" md="4">
                    <AboutItem img="experience" title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
                </Col>
            </Row>
        </section>
       
    )
}

export default About;