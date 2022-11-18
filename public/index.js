import './index.scss';
import Project from './Project';

const Projects = () => {
    
    return (
        <section id="projects">
        <div className='projects-page p-5em'>
            <div class="w-100">
                <h1 className='text-l highlighted-text justify centered'>
                    <div>Projects</div>
                </h1>
            </div>
            <div class="Projects-grid">
                <Project link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/project-realestate.png" title='Real Estate Application' subtitle="Made with NodeJS, this application allows the user to manage all the aspects related with renting or buying properties, as well as handling everything related with communications, documents or media."></Project>
                <Project link="https://github.com/golmenero/javascript_videogame" img="projects/project-js.png" title='Game Runner' subtitle="This game was is an experiment to try to create a pure JavaScript game application."></Project>
                <Project link="https://github.com/golmenero/videojuego_shooter" img="projects/project-shooter.jpg" title='Game Shooter' subtitle="This shooter videogame is created in Unreal Engine 4 and allows the user to survive different rounds against different threats. In order to defent himself, he can use different guns or powerups."></Project>
                <Project link="https://github.com/golmenero/sdi505-lab-spring" img="projects/project-spring.jpg" title='Music Shop Application' subtitle="A simple music shop application made in SpringBoot. It allows the user to buy, sell or play different music tracks."></Project>
            </div>
        </div>
    </section>
    )
}

export default Projects;