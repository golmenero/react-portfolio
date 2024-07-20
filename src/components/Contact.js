import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";

const Contact = () => {
	const [t] = useTranslation("global");

	const ContactItem = ({ icon, link, text }) => {
		return (
			<div className='contact-item'>
				<p>
					<i className={icon}></i>
					<a href={link}>{text}</a>
				</p>
			</div>
		)
	}

	return (
		<section id="contact" className='hidden' data-nav="contact">
			<Row>
				<h1>{t("navigation.contact-me")}</h1>
			</Row>
			<Row>
				<Col sm="12" md="6">
					<ContactItem icon="bx bxl-gmail" link="mailto:cgomezcolmenero@gmail.com" text="cgomezcolmenero@gmail.com"></ContactItem>
					<ContactItem icon="bx bxl-linkedin" link="https://www.linkedin.com/in/carlos-gomez-colmenero/" text="LinkedIn"></ContactItem>
					<ContactItem icon="bx bxl-github" link="https://github.com/golmenero" text="GitHub"></ContactItem>
				</Col>
				<Col sm="12" md="6">
					<img alt="Send email" src="profile/email.png"></img>
				</Col>
			</Row>
		</section>
	)
}

export default Contact;