import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";

const AboutItem = ({ img, icon, title, subtitle }) => {

	return (
		<Row className="mb-20">
			<Col sm="12">
				<h2>{title}</h2>
			</Col>
			<Col sm="12">
				<p> {subtitle}</p>
			</Col>
		</Row>
	)
}

const About = () => {
	const [t] = useTranslation("global");

	return (
		<section id="about" className='hidden' data-nav="about">
			<Row>
				<h1>{t("navigation.about")}</h1>
			</Row>
			<Row>
				<Col sm="12" md="12" lg="7">
					<AboutItem img="about/education.png" icon="bx bxs-graduation" title={t("about.education.title")} subtitle={t("about.education.subtitle")}></AboutItem>
					<AboutItem img="about/language.png" icon="bx bx-globe" title={t("about.languages.title")} subtitle={t("about.languages.subtitle")}></AboutItem>
					<AboutItem img="about/work.png" icon="bx bx-wrench" title={t("about.experience.title")} subtitle={t("about.experience.subtitle")}></AboutItem>
					<Row>
						<Col sm="12">
							<a className='btn right' href={t("about.download-url")} target='_blank' rel="noreferrer" download>{t("about.download")} CV</a>
						</Col>
					</Row>
				</Col>
				<Col sm="12" md="12" lg="5">
					<Row className='mb-20'>
						<Col sm="12">
							<div className='about-image'></div>
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	)
}

export default About;