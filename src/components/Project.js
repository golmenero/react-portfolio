import { useTranslation } from "react-i18next";
import CustomButton from './CustomButton';
import { Row, Col } from "reactstrap";

const Project = ({ link, title, subtitle, img }) => {
	const [t] = useTranslation("global");

	return (
		<div className="card-panel">
			<div className="image-container">
				<img src={img} alt={title} className="background-image" />
				<h2 className="title">{title}</h2>
			</div>
			<div className="content">
				<p className='text-justify'>{subtitle}</p>
				<CustomButton type="text" href={link} text={t("projects.see-source-code")} />
			</div>
    	</div>
	)
}

const Projects = () => {
	const [t] = useTranslation("global");

	return (
		<section id="projects" className='hidden' data-nav="projects">
			<Row>
				<h1>{t("navigation.projects")}</h1>
			</Row>
			<Row>
				<p>{t("projects.header")}</p>
			</Row>
			<Row>
				<Col sm="12" md="6">
					<Project link="https://github.com/golmenero/tfg_inmobiliaria" img="projects/proj-3-new.png" title={t("projects.realestate.title")} subtitle={t("projects.realestate.subtitle")}></Project>
				</Col>
				<Col sm="12" md="6">
					<Project link="https://github.com/golmenero/sdi505-lab-spring" img="projects/proj-1-new.png" title={t("projects.music.title")} subtitle={t("projects.music.subtitle")}></Project>
				</Col>
			</Row>
			
		</section>
	)
}

export default Projects;