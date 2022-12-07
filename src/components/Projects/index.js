import { Button, Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";

const Project = ({ pos, link, title, subtitle, img}) => {
    const [t] =  useTranslation("global");

    return (
        <Row className="project">
            <Col sm="12" md="5">
                <Col sm="12">
                    <h2 className='heading-2'>{ title }</h2>
                    <p className='heading-3'> { subtitle }</p>
                </Col>
                <Col sm="12">
                    <Button className='custom-button' href={link}>{ t("projects.see-source-code") }</Button>
                </Col>
            </Col>              
            <Col sm="12" md="7" className='text-center'>
                <img src={ img } alt={ title } />
            </Col>
        </Row>
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
                <Project pos='L' link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/proj-3.png" title={ t("projects.realestate.title") } subtitle={ t("projects.realestate.subtitle") }></Project>
                <Project pos='R' link="https://github.com/golmenero/javascript_videogame" img="projects/proj-4.png" title={ t("projects.runner.title") } subtitle={ t("projects.runner.subtitle") }></Project>                   
                <Project pos='L' link="https://github.com/golmenero/videojuego_shooter" img="projects/proj-2.png" title={ t("projects.shooter.title") } subtitle={ t("projects.shooter.subtitle") }></Project>
                <Project pos='R' link="https://github.com/golmenero/sdi505-lab-spring" img="projects/proj-1.png" title={ t("projects.music.title") } subtitle={ t("projects.music.subtitle") }></Project>                       
            </div>
        </section>
    )
}

export default Projects;