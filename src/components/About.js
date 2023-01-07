import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const AboutItem = ({ img, icon, title, subtitle }) => {

	return (
		<div className="mb-20">
			<h2 className='heading-2'>{title}</h2>
			<p className='heading-3'> {subtitle}</p>
		</div>
	)
}

const About = () => {
	const [t] = useTranslation("global");

	return (
		<section id="about" className='hidden' data-nav="about">
			<Row>
				<h1 className='heading-1'>{t("navigation.about")}</h1>
				<p className='heading-3'>{t("about.header")}</p>
			</Row>
			<Row>
				<Tilt className='h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
					<div className="card-panel">
						<Row>
							<Col sm="12" md="7">
								<AboutItem img="about/education.png" icon="bx bxs-graduation" title={t("about.education.title")} subtitle={t("about.education.subtitle")}></AboutItem>
								<AboutItem img="about/language.png" icon="bx bx-globe" title={t("about.languages.title")} subtitle={t("about.languages.subtitle")}></AboutItem>
								<AboutItem img="about/work.png" icon="bx bx-wrench" title={t("about.experience.title")} subtitle={t("about.experience.subtitle")}></AboutItem>
							</Col>
							<Col sm="12" md="5">
								<img className='cropped' alt="Profile" src='profile3.jpg' />
							</Col>
						</Row>
					</div>
				</Tilt>
			</Row>
		</section>
	)
}

export default About;