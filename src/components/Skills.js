import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";

const Skill = ({ title, tags = [] }) => {

	return (
		<div className='card-panel gradient'>
			<h2>{title}</h2>
			<div className='tags'>
				{tags.map((tag) => (
					<div className="tag">
						<i className="bx bx-check"></i>
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
					<Skill title={t("skills.back.title")} tags={[
						"Java", 
						"Kotlin", 
						"PHP", 
						"C#", 
						"Symfony", 
						"SpringBoot",
						"Python"
					]}></Skill>
				</Col>
				<Col className='mb-10' sm="12" md="4" lg="4">
					<Skill title={t("skills.front.title")} tags={[
						"HTML", 
						"CSS", 
						"SCSS / SASS", 
						"Angular", 
						"JavaScript", 
						"TypeScript", 
						"HTMX"
					]}></Skill>
				</Col>
				<Col className='mb-10' sm="12" md="4" lg="4">
					<Skill title={t("skills.others.title")} tags={[
						"Git / Mercurial",
						t("skills.others.skill.rest-api"),
						t("skills.others.skill.database"),
						t("skills.others.skill.design-patterns"),
						t("skills.others.skill.data-security"),
						t("skills.others.skill.testing"),
						t("skills.others.skill.social"),
					]}></Skill>
				</Col>
			</Row>
		</section>
	)
}

export default Skills;