import { Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const Skill = ({ icon, title, subtitle}) => {
    
    return (
        <Col className='mb-20' sm="12" md="12" lg="4">
            <Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
                <div className='card-panel'>
                    <i className={icon}></i>
                    <h3 className='heading-2'>{title}</h3>
                    <p className='heading-3'>{subtitle}</p>
                </div>  
            </Tilt>  
        </Col>             
    )
}

const Skills = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="skills" className='animate-on-scroll' data-nav="skills">
            <Row>
                <h1 className='heading-1'>{ t("navigation.skills") }</h1>
            </Row>
            <div>
                <Row>
                    <Skill icon="bx bx-palette" title={ t("skills.front.title") } subtitle={ t("skills.front.subtitle") }></Skill>
                    <Skill icon="bx bx-cog" title={ t("skills.back.title") } subtitle={ t("skills.back.subtitle") }></Skill>
                    <Skill icon="bx bx-cloud" title={ t("skills.api.title") } subtitle={ t("skills.api.subtitle") }></Skill>
                </Row>
                <Row>
                    <Skill icon="bx bx-data" title={ t("skills.database.title") } subtitle={ t("skills.database.subtitle") }></Skill>
                    <Skill icon="bx bx-sitemap" title={ t("skills.business.title") } subtitle={ t("skills.business.subtitle") }></Skill>
                    <Skill icon="bx bx-check" title={ t("skills.tester.title") } subtitle={ t("skills.tester.subtitle") }></Skill> 
                </Row>
            </div>
        </section>
    )
}

export default Skills;