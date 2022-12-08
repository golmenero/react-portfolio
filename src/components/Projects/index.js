import { Button, Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";

const Project = ({ pos, link, title, subtitle, img}) => {
    const [t] =  useTranslation("global");

    return (
        <Row className="project animated-border section-color p-2em h-100">
            <Col sm="12" md="6">
            <h2 className='heading-2'>{ title }</h2>
                <p className='heading-3'> { subtitle }</p>
                <Button className='custom-button' href={link}>{ t("projects.see-source-code") }</Button>
            </Col>
            <Col sm="12" md="6" className='text-center'>
                    <img className='animated-border' src={ img } alt={ title } />
            </Col>
        </Row>
    )
}

const Projects = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="projects" className='animate-on-scroll' data-nav="projects">
            <Row>
                <h1 className='heading-1 text-white'>{ t("navigation.projects") }</h1>
            </Row>
            <div>
                <Project pos='L' link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/proj-3-raw.png" title={ t("projects.realestate.title") } subtitle={ t("projects.realestate.subtitle") }></Project>
                <Project pos='R' link="https://github.com/golmenero/javascript_videogame" img="projects/proj-4-raw.png" title={ t("projects.runner.title") } subtitle={ t("projects.runner.subtitle") }></Project>                   
                <Project pos='L' link="https://github.com/golmenero/videojuego_shooter" img="projects/proj-2-raw.jpg" title={ t("projects.shooter.title") } subtitle={ t("projects.shooter.subtitle") }></Project>
                <Project pos='R' link="https://github.com/golmenero/sdi505-lab-spring" img="projects/proj-1-raw.jpg" title={ t("projects.music.title") } subtitle={ t("projects.music.subtitle") }></Project>                       
            </div>
        </section>
    )
}

export default Projects;