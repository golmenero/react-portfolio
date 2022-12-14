import { Button, Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const Project = ({ link, title, subtitle, img }) => {
	const [t] = useTranslation("global");

	return (
		<Col className="mb-20" sm="12">
			<Tilt className='mb-20 h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
				<div className="card-panel">
					<Row>
						<Col sm="12" md="6">
							<h2 className='heading-2'>{title}</h2>
							<p className='heading-3'> {subtitle}</p>
							<Button className='custom-button' href={link}>{t("projects.see-source-code")}</Button>
						</Col>
						<Col sm="12" md="6" className='text-center'>
							<img src={img} alt={title} />
						</Col>
					</Row>
				</div>
			</Tilt>
		</Col>
	)
}

const Projects = () => {
	const [t] = useTranslation("global");

	return (
		<section id="projects" className='hidden' data-nav="projects">
			<Row>
				<h1 className='heading-1'>{t("navigation.projects")}</h1>
			</Row>
			<Row>
				<Project link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/proj-3-new.png" title={t("projects.realestate.title")} subtitle={t("projects.realestate.subtitle")}></Project>
				<Project link="https://github.com/golmenero/javascript_videogame" img="projects/proj-4-new.png" title={t("projects.runner.title")} subtitle={t("projects.runner.subtitle")}></Project>
				<Project link="https://github.com/golmenero/videojuego_shooter" img="projects/proj-2-new.png" title={t("projects.shooter.title")} subtitle={t("projects.shooter.subtitle")}></Project>
				<Project link="https://github.com/golmenero/sdi505-lab-spring" img="projects/proj-1-new.png" title={t("projects.music.title")} subtitle={t("projects.music.subtitle")}></Project>
			</Row>
		</section>
	)
}

export default Projects;