import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const Skill = ({ icon, title, subtitle }) => {

	return (
		<Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
			<div className='card-panel'>
				<div className='mb-20'>
					<i className={icon}></i>
				</div>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
		</Tilt>
	)
}

const Skills = () => {
	const [t] = useTranslation("global");

	return (
		<section id="skills" className='hidden' data-nav="skills">
			<Row>
				<h1>{t("navigation.skills")}</h1>
			</Row>
			<div>
				<Row>
					<Col className='mb-20' sm="12" md="12" lg='4'>
						<Skill icon="bx bx-palette" title={t("skills.front.title")} subtitle={t("skills.front.subtitle")}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-cog" title={t("skills.back.title")} subtitle={t("skills.back.subtitle")}></Skill>
					</Col>
				</Row>
				<Row>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-cloud" title={t("skills.api.title")} subtitle={t("skills.api.subtitle")}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-data" title={t("skills.database.title")} subtitle={t("skills.database.subtitle")}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-sitemap" title={t("skills.business.title")} subtitle={t("skills.business.subtitle")}></Skill>
					</Col>
				</Row>
				<Row>
					<Col className='mb-20' sm="12" md="12" lg={{ size: '4', offset: '4' }}>
						<Skill icon="bx bx-check" title={t("skills.tester.title")} subtitle={t("skills.tester.subtitle")}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-wink-smile" title={t("skills.social.title")} subtitle={t("skills.social.subtitle")}></Skill>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Skills;