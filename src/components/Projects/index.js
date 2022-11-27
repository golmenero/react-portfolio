import Loader from 'react-loaders';
import { Col, Container, Row } from 'reactstrap';
import './index.scss';
import Project from './Project';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const [t] =  useTranslation("global");
    
    return (
        <>
            <Container className='fade-in-first'>
                <Row className='fade-in-first'>
                    <h1 className='text-l highlighted-text'>{ t("navigation.projects") }</h1>
                    <p className='section-subtitle text-m'>{ t("projects.header") }</p>
                </Row>
                <div className="fade-in-second">
                    <Row>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/tfg_inmobiliaria" img="realestate" title={ t("projects.realestate.title") } subtitle={ t("projects.realestate.subtitle") }></Project>
                        </Col>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/javascript_videogame" img="game" title={ t("projects.runner.title") } subtitle={ t("projects.runner.subtitle") }></Project>                   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/videojuego_shooter" img="shooter" title={ t("projects.shooter.title") } subtitle={ t("projects.shooter.subtitle") }></Project>
                        </Col>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/sdi505-lab-spring" img="spring" title={ t("projects.music.title") } subtitle={ t("projects.music.subtitle") }></Project>                       
                        </Col>
                    </Row>
                </div>
            </Container>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Projects;