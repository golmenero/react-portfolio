import { Col, Row } from 'reactstrap';
import './index.scss';

const About = () => {
    
    return (
        <section id="about">
            <Row>
                <Col sm="12" md="9">
                    <h1 className='fade-in-first text-l justify'>
                        <span className='highlighted-text'>Hello!</span> <br/> I'm Carlos, a software developer.
                    </h1>
                    <div className='fade-in-second'>
                        <p className='justify text-s'>
                            I am a young Engineer with a passion for programming. I graduated in 2021 in Software Engineering at the University of Oviedo, at the Higher Technical School of Computer Engineering. I've been working since 2019 on different projects. I currently work at Idealista.com, the largest company in Spain in its sector.
                        </p> 
                        <p className='justify text-s'>
                            Since I was a kid I've been obsessed with solving problems, and code development allows me to fulfill my dream of unleashing my creativity to put a solution to any problem in the world, while making people's lives easier.
                        </p>
                        <p className="quote text-l">
                            "Build the simplest code, solve the most complex problems"
                        </p>
                    </div>
                </Col>
                <Col sm="12" md="3">
                    <img className='fade-in-first' alt="Profile" src='logo.jpeg'/>
                </Col>
            </Row>
        </section>
    )
}

export default About;