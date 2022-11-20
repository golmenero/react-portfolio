import { faBezierCurve, faCheckDouble, faCloud, faDatabase, faPalette, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { Col, Container, Row } from 'reactstrap';
import './index.scss';
import Skill from './Skill';

const Skills = () => {
    
    return (
        <>
            <Container className='fade-in-first'>
                <Row>
                    <h1 className='highlighted-text'>Skills</h1>
                    <p className='section-subtitle text-m'>I have experience in the following fields of knowledge.</p>
                </Row>
                <div className="fade-in-second">
                    <Row>
                        <Col sm="12" md="4">
                            <Skill icon={faPalette} title='Front-End Development' subtitle="HTML and CSS, as well as frameworks like Bootstrap or Materialize."></Skill>
                        </Col>
                        <Col sm="12" md="4">
                            <Skill icon={faScrewdriverWrench} title='Back-End Development' subtitle="Java, PHP, JavaScript, C#, C++, Python, and TypeScript, as well as technologies like Angular, NodeJS, Phalcon, Symfony, SpringBoot, and React, among others."></Skill>
                        </Col>
                        <Col sm="12" md="4">
                            <Skill icon={faCloud} title='API Management' subtitle="Knowledge of creating, managing and maintaining APIs."></Skill>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="4">
                            <Skill icon={faDatabase} title='Database Management' subtitle="SQL, MySQL, PL-SQL, MongoDB, MariaDB, NoSQL and Oracle. Extensive knowledge in both relational and documentary databases."></Skill>
                        </Col>
                        <Col sm="12" md="4">
                            <Skill icon={faBezierCurve} title='Business Management' subtitle="Extensive knowledge in Design Patterns and Software Design, as well as advanced concepts of Software Architecture and principles of security and data consistency."></Skill>
                        </Col>
                        <Col sm="12" md="4">
                            <Skill icon={faCheckDouble} title='Tester' subtitle="Advanced testing knowledge (JUnit, Selenium and PHPUnit, among others)"></Skill> 
                        </Col>
                    </Row>
                </div>
            </Container>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Skills;