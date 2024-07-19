import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";

const Skill = ({ title, tags = [] }) => {

	return (
		<div className='card-panel'>
			<h2>{title}</h2>
			<div className='tags'>
				{tags.map((tag) => (
					<div className="tag">
						<i class="bx bx-check"></i>
						<span key={tag}>{ tag }</span>
					</div>
				))}
			</div>
		</div>
	)
}

const Skills = () => {
	const [t] = useTranslation("global");

	return (
		<section id="skills" className='hidden' data-nav="skills">
			<Row>
				<h1>{t("navigation.skills")}</h1>
			</Row>
			<Row>
				<p>{t("skills.header")}</p>
			</Row>
			<Row>
				<Col className='mb-10' sm="12" md="4" lg="4">
					<Skill title={t("skills.back.title")} tags={["Java", "Kotlin", "PHP", "C#", "TypeScript", "Symfony", "SpringBoot", "Rest API"]}></Skill>
				</Col>
				<Col className='mb-10' sm="12" md="4" lg="4">
					<Skill title={t("skills.database.title")} tags={["SQL", "MySQL", "PL-SQL", "MongoDB", "MariaDB", "NoSQL", "Oracle"]}></Skill>
				</Col>
				<Col className='mb-10' sm="12" md="4" lg="4">
					<Skill title={t("skills.tester.title")} tags={["JUnit", "Selenium", "PHPUnit"]}></Skill>
				</Col>
			</Row>
		</section>
	)
}

export default Skills;