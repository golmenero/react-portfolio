import { faBezierCurve, faCheckDouble, faCloud, faDatabase, faPalette, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import Skill from './Skill';

const Skills = () => {
    
    return (
        <section id="skills">
            <div className='skills-page p-5em'>
                <div className="w-100">
                    <h1 className='text-l highlighted-text justify centered'>
                        <div>Skills</div>
                    </h1>
                </div>
                <div className="skills-grid">
                    <Skill icon={faPalette} title='Front-End Development' subtitle="HTML and CSS, as well as frameworks like Bootstrap or Materialize."></Skill>
                    <Skill icon={faScrewdriverWrench} title='Back-End Development' subtitle="Java, PHP, JavaScript, C#, C++, Python, and TypeScript, as well as technologies like Angular, NodeJS, Phalcon, Symfony, SpringBoot, and React, among others."></Skill>
                    <Skill icon={faCloud} title='API Management' subtitle="Knowledge of creating, managing and maintaining APIs."></Skill>
                    <Skill icon={faDatabase} title='Database Management' subtitle="SQL, MySQL, PL-SQL, MongoDB, MariaDB, NoSQL and Oracle. Extensive knowledge in both relational and documentary databases."></Skill>
                    <Skill icon={faBezierCurve} title='Business Management' subtitle="Extensive knowledge in Design Patterns and Software Design, as well as advanced concepts of Software Architecture and principles of security and data consistency."></Skill>
                    <Skill icon={faCheckDouble} title='Tester' subtitle="Advanced testing knowledge (JUnit, Selenium and PHPUnit, among others)"></Skill> 
                </div>
            </div>
        </section>
    )
}

export default Skills;