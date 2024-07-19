import { useTranslation } from "react-i18next";
import CustomButton from './CustomButton';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Project = ({ link, title, subtitle, img }) => {
	const [t] = useTranslation("global");

	return (
		<div className="card-panel">
			<h2>{title}</h2>
			<img src={img} alt={title} />
			<p className='text-justify'> {subtitle}</p>
			<CustomButton type="text" icon="bx bx-code-alt" href={link} text={t("projects.see-source-code")}></CustomButton>
		</div>
	)
}

const Projects = () => {
	const [t] = useTranslation("global");
	const responsive = {
		superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
	};

	return (
		<section id="projects" className='hidden' data-nav="projects">
			<h1>{t("navigation.projects")}</h1>
			<Carousel responsive={responsive} itemClass="mr-10">
				<Project link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/proj-3-new.png" title={t("projects.realestate.title")} subtitle={t("projects.realestate.subtitle")}></Project>
				<Project link="https://github.com/golmenero/javascript_videogame" img="projects/proj-4-new.png" title={t("projects.runner.title")} subtitle={t("projects.runner.subtitle")}></Project>
				<Project link="https://github.com/golmenero/videojuego_shooter" img="projects/proj-2-new.png" title={t("projects.shooter.title")} subtitle={t("projects.shooter.subtitle")}></Project>
				<Project link="https://github.com/golmenero/sdi505-lab-spring" img="projects/proj-1-new.png" title={t("projects.music.title")} subtitle={t("projects.music.subtitle")}></Project>
			</Carousel>
		</section>
	)
}

export default Projects;