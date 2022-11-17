import { faAngular, faCss3, faHtml5, faJava, faJs, faNodeJs, faPhp, faPython, faReact, faSymfony } from '@fortawesome/free-brands-svg-icons';
import { faC, faCheckDouble, faCode, faDatabase, faGears, faHashtag, faLeaf, faServer, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import Skill from './Skill';

const Skills = () => {
    
    return (
        <section id="skills">
            <div className='skills-page p-5em'>
                <div class="w-100">
                    <h1 className='text-l justify centered'>
                        <FontAwesomeIcon icon={faGears} className="icon-header" />
                        <div>Skills & Technologies</div>
                    </h1>
                </div>
                <div class="skills-grid">
                    <Skill icon={faJava} color='#5382A1' text="Java" position=""></Skill>
                    <Skill icon={faPhp} color='#787CB5' text="PHP" position=""></Skill>
                    <Skill icon={faJs} color='#f89820' text="JavaScript" position=""></Skill>
                    <Skill icon={faCode} color='#007acc' text="TypeScript" position=""></Skill>
                    <Skill icon={faHashtag} color='#990073' text="C#" position=""></Skill>
                    <Skill icon={faC} color='#5382A1' text="C++" position=""></Skill>
                    <Skill icon={faPython} color='#ffe873' text="Python" position=""></Skill>
                    <Skill icon={faNodeJs} color='#69A063' text="NodeJS" position=""></Skill>
                    <Skill icon={faHtml5} color='#e34c26' text="HTML" position=""></Skill>
                    <Skill icon={faCss3} color='#2965f1' text="CSS" position=""></Skill>
                    <Skill icon={faLeaf} color='#00cc44' text="Spring" position=""></Skill>
                    <Skill icon={faSymfony} color='#fff' text="Symfony" position=""></Skill>
                    <Skill icon={faAngular} color='#dd1b16' text="Angular" position=""></Skill>
                    <Skill icon={faReact} color='#61dbfb' text="React" position=""></Skill>
                    <Skill icon={faDatabase} color='#84b4f4' text="Database Management" position=""></Skill>
                    <Skill icon={faServer} color='#005ce6' text="API Management" position=""></Skill>
                    <Skill icon={faSitemap} color='#b3b3b3' text="Software Design" position=""></Skill>
                    <Skill icon={faCheckDouble} color='#29a329' text="Testing" position=""></Skill>
                </div>
            </div>
        </section>
    )
}

export default Skills;