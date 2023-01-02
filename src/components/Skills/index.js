import { faBezierCurve, faCheckDouble, faCloud, faDatabase, faPalette, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";

const Skill = ({ icon, title, subtitle}) => {
    
    return (
        <div className='p-2em animated-border section-color h-100'>
            <div>
                <h3 className='heading-2'>{title}</h3>
                <p className='heading-3'>{subtitle}</p>
            </div>
        </div>                 
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
                    <Col sm="12" md="12" lg="4">
                        <Skill icon={faPalette} title={ t("skills.front.title") } subtitle={ t("skills.front.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="12" lg="4">
                        <Skill icon={faScrewdriverWrench} title={ t("skills.back.title") } subtitle={ t("skills.back.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="12" lg="4">
                        <Skill icon={faCloud} title={ t("skills.api.title") } subtitle={ t("skills.api.subtitle") }></Skill>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" lg="4">
                        <Skill icon={faDatabase} title={ t("skills.database.title") } subtitle={ t("skills.database.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="12" lg="4">
                        <Skill icon={faBezierCurve} title={ t("skills.business.title") } subtitle={ t("skills.business.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="12" lg="4">
                        <Skill icon={faCheckDouble} title={ t("skills.tester.title") } subtitle={ t("skills.tester.subtitle") }></Skill> 
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Skills;