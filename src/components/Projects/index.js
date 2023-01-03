import { Button, Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const Project = ({ pos, link, title, subtitle, img}) => {
    const [t] =  useTranslation("global");

    return (
        <Tilt className='h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
            <Row className="project section-color p-2em h-100">
                <Col sm="12" md="6">
                <h2 className='heading-2'>{ title }</h2>
                    <p className='heading-3'> { subtitle }</p>
                    <Button className='custom-button' href={link}>{ t("projects.see-source-code") }</Button>
                </Col>
                <Col sm="12" md="6" className='text-center'>
                        <img src={ img } alt={ title } />
                </Col>
            </Row>
        </Tilt>
    )
}

const Projects = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="projects" className='animate-on-scroll' data-nav="projects">
            <Row>
                <h1 className='heading-1'>{ t("navigation.projects") }</h1>
            </Row>
            <div>
                <Project pos='L' link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/proj-3-new.png" title={ t("projects.realestate.title") } subtitle={ t("projects.realestate.subtitle") }></Project>
                <Project pos='R' link="https://github.com/golmenero/javascript_videogame" img="projects/proj-4-new.png" title={ t("projects.runner.title") } subtitle={ t("projects.runner.subtitle") }></Project>                   
                <Project pos='L' link="https://github.com/golmenero/videojuego_shooter" img="projects/proj-2-new.png" title={ t("projects.shooter.title") } subtitle={ t("projects.shooter.subtitle") }></Project>
                <Project pos='R' link="https://github.com/golmenero/sdi505-lab-spring" img="projects/proj-1-new.png" title={ t("projects.music.title") } subtitle={ t("projects.music.subtitle") }></Project>                       
            </div>
        </section>
    )
}

export default Projects;