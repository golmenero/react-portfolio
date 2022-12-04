import { faBezierCurve, faCheckDouble, faCloud, faDatabase, faPalette, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'reactstrap';
import './index.scss';
import Skill from './Skill';
import { useTranslation } from "react-i18next";

const Skills = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="skills">
            <Row>
                <h1 className='accent-color'>{ t("navigation.skills") }</h1>
                <p className='section-subtitle text-m'>{ t("skills.header") }</p>
            </Row>
            <div className="fade-in-second">
                <Row>
                    <Col sm="12" md="4">
                        <Skill icon={faPalette} title={ t("skills.front.title") } subtitle={ t("skills.front.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="4">
                        <Skill icon={faScrewdriverWrench} title={ t("skills.back.title") } subtitle={ t("skills.back.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="4">
                        <Skill icon={faCloud} title={ t("skills.api.title") } subtitle={ t("skills.api.subtitle") }></Skill>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="4">
                        <Skill icon={faDatabase} title={ t("skills.database.title") } subtitle={ t("skills.database.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="4">
                        <Skill icon={faBezierCurve} title={ t("skills.business.title") } subtitle={ t("skills.business.subtitle") }></Skill>
                    </Col>
                    <Col sm="12" md="4">
                        <Skill icon={faCheckDouble} title={ t("skills.tester.title") } subtitle={ t("skills.tester.subtitle") }></Skill> 
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Skills;