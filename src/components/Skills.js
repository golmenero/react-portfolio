import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';

const Skill = ({ icon, title, subtitle, tags = [] }) => {

	return (
		<Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
			<div className='card-panel'>
				<div className='mb-10'>
					<i className={icon}></i>
				</div>
				<h2>{title}</h2>
				<p>{subtitle}</p>
				<div className='tags'>
					{tags.map((tag) => (
						<span key={tag} className="tag">{ tag }</span>
					))}
				</div>
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
					<Col className='mb-10' sm="12" md="6" lg="6">
						<Skill icon="bx bx-cog" title={t("skills.back.title")} subtitle={t("skills.business.subtitle")} tags={["Java", "Kotlin", "PHP", "C#", "TypeScript", "Symfony", "SpringBoot"]}></Skill>
					</Col>
					<Col className='mb-10' sm="12" md="6" lg="6">
						<Skill icon="bx bx-check" title={t("skills.tester.title")} subtitle={t("skills.tester.subtitle")} tags={["JUnit", "Selenium", "PHPUnit"]}></Skill>
					</Col>
				</Row>
				<Row>
					<Col className='mb-10' sm="4" md="4" lg="4">
						<Skill icon="bx bx-cloud" title={t("skills.api.title")} subtitle={t("skills.api.subtitle")}></Skill>
					</Col>
					<Col className='mb-10' sm="12" md="4" lg="4">
						<Skill icon="bx bx-wink-smile" title={t("skills.social.title")} subtitle={t("skills.social.subtitle")}></Skill>
					</Col>
					<Col className='mb-10' sm="12" md="4" lg="4">
						<Skill icon="bx bx-data" title={t("skills.database.title")} subtitle={t("skills.database.subtitle")} tags={["SQL", "MySQL", "PL-SQL", "MongoDB", "MariaDB", "NoSQL", "Oracle"]}></Skill>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Skills;