import Loader from 'react-loaders';
import { Col, Container, Row } from 'reactstrap';
import './index.scss';
import Project from './Project';

const Projects = () => {
    
    return (
        <>
            <Container className='fade-in-first'>
                <Row className='fade-in-first'>
                    <h1 className='text-l highlighted-text'>Projects</h1>
                    <p className='section-subtitle text-m'>Here's a list of my previous projects.</p>
                </Row>
                <div className="fade-in-second">
                    <Row>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/tfg_inmobiliaria" img="realestate" title='Real Estate Application' subtitle="Made with NodeJS, this application allows the user to manage all the aspects related with renting or buying properties, as well as handling everything related with communications, documents or media."></Project>
                        </Col>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/javascript_videogame" img="game" title='Game Runner' subtitle="This game was is an experiment to try to create a pure JavaScript game application."></Project>                   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/videojuego_shooter" img="shooter" title='Game Shooter' subtitle="This shooter videogame is created in Unreal Engine 4 and allows the user to survive different rounds against different threats. In order to defent himself, he can use different guns or powerups."></Project>
                        </Col>
                        <Col sm="12" md="6">
                            <Project link="https://github.com/golmenero/sdi505-lab-spring" img="spring" title='Music Shop Application' subtitle="A simple music shop application made in SpringBoot. It allows the user to buy, sell or play different music tracks."></Project>                        
                        </Col>
                    </Row>
                </div>
            </Container>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Projects;