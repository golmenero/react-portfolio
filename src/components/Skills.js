import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';
import CustomButton from './CustomButton';

const Skill = ({ icon, title, subtitle, tags = [] }) => {

	return (
		<Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
			<div className='card-panel'>
				<div className='mb-20'>
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
					<Col className='mb-20' sm="12" md="12" lg='4'>
						<Skill icon="bx bx-palette" title={t("skills.front.title")} subtitle={t("skills.front.subtitle")} tags={["HTML", "CSS", "SASS / SCSS", "Bootstrap", "Materialize", "JavaScript"]}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="8">
						<Skill icon="bx bx-cog" title={t("skills.back.title")} subtitle={t("skills.business.subtitle")} tags={["Java", "PHP", "C#", "C++", "Python", "TypeScript", "Angular", "NodeJS", "Phalcon", "Symfony", "SpringBoot", "React"]}></Skill>
					</Col>
				</Row>
				<Row>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-cloud" title={t("skills.api.title")} subtitle={t("skills.api.subtitle")}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Tilt className='h-100' tiltMaxAngleX="4" tiltMaxAngleY="4" scale="1.02">
							<div className="card-panel gradient">
								<div className='mb-20'>
									<i className='bx bx-file-blank'></i>
								</div>
								<h2>CV</h2>
								<CustomButton type="text" icon='bx bx-arrow-from-top' href={t("about.download-url")} text={t("about.download")}></CustomButton>
							</div>
						</Tilt>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-wink-smile" title={t("skills.social.title")} subtitle={t("skills.social.subtitle")}></Skill>
					</Col>
				</Row>
				<Row>
					<Col className='mb-20' sm="12" md="12" lg="8">
						<Skill icon="bx bx-data" title={t("skills.database.title")} subtitle={t("skills.database.subtitle")} tags={["SQL", "MySQL", "PL-SQL", "MongoDB", "MariaDB", "NoSQL", "Oracle"]}></Skill>
					</Col>
					<Col className='mb-20' sm="12" md="12" lg="4">
						<Skill icon="bx bx-check" title={t("skills.tester.title")} subtitle={t("skills.tester.subtitle")} tags={["JUnit", "Selenium", "PHPUnit"]}></Skill>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Skills;