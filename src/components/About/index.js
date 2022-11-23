import { faGlobe, faGraduationCap, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { Col, Container, Row } from 'reactstrap';
import AboutItem from './AboutItem';
import './index.scss';

const About = () => {
    
    return (
        <>
            <Container>
                <Row>
                    <Col sm="12" md="9">
                        <h1 className='fade-in-first text-l justify'>
                            <span className='highlighted-text'>Hello!</span> <br/> I'm Carlos, a software developer.
                        </h1>
                        <div className='fade-in-second'>
                            <p className='justify text-m'>
                                I am a young Engineer with a passion for programming. Since I was a kid I've been obsessed with solving problems, and code development allows me to fulfill my dream of unleashing my creativity to put a solution to any problem in the world, while making people's lives easier.
                            </p>
                            <p className="quote text-l">
                                "Build the simplest code, solve the most complex problems"
                            </p>
                        </div>
                    </Col>
                    <Col sm="12" md="3">
                        <img className='fade-in-first' alt="Profile" src='./profile.jpeg'/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="4">
                        <AboutItem icon={faGraduationCap} title='Education' subtitle="Graduated in 2021 in Software Engineering at the University of Oviedo, at the Higher Technical School of Computer Engineering."></AboutItem>
                    </Col>
                    <Col sm="12" md="4">
                        <AboutItem icon={faGlobe} title='Spoken languages' subtitle="Advanced level of speaking, reading and writing in English and native in Spanish."></AboutItem>
                    </Col>
                    <Col sm="12" md="4">
                        <AboutItem icon={faKeyboard} title='Experience' subtitle="I have been working on different projects since before finishing my university degree. I currently work at Idealista.com, the most important company in Spain, Portugal and Italy in its sector."></AboutItem> 
                    </Col>
                </Row>
            </Container>
            <Loader type="ball-scale-ripple-multiple" />
        </>
       
    )
}

export default About;