import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Input, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
	const [t] = useTranslation("global");

	const refForm = useRef();
	const captcha = useRef(null);
	const sendEmail = (e) => {
		e.preventDefault()

		if (!captcha.current.getValue()) alert(t("contact-me.captcha"));
		else {
			emailjs
				.sendForm(
					'service_v2ygwl6',
					'template_oip3dsh',
					refForm.current,
					'gzl6tN9s7tAoB0POl'
				).then(
					() => {
						alert(t("contact-me.feedback-success"))
						window.location.reload(false)
					},
					() => {
						alert("contact-me.feedback-error")
					}
				)
		}
	}

	return (
		<section id="contact" className='hidden' data-nav="contact">
			<form ref={refForm} onSubmit={sendEmail}>
				<Row>
					<h1 className='heading-1'>{t("navigation.contact-me")}</h1>
					<p className='heading-3'>{t("contact-me.header")}</p>
				</Row>
				<Row>
					<Col sm="12" md="6">
						<Row>
							<Col className='mb-20' sm='12' md="6">
								<Input type="text" name='name' placeholder={t("contact-me.name")} required />
							</Col>
							<Col className='mb-20' sm='12' md="6">
								<Input type="email" name='email' placeholder={t("contact-me.email")} required />
							</Col>
							<Col className='mb-20' sm="12">
								<Input placeholder={t("contact-me.subject")} type="text" name="subject" required />
							</Col>
							<Col className='mb-20' sm="12">
								<Input type="textarea" placeholder={t("contact-me.message")} name='message' required />
							</Col>
							<Col className='mb-20' sm="12">
								<ReCAPTCHA ref={captcha} sitekey='6Lf1cnAjAAAAANcNeOWfKFE11Mk-D2BYHHJxxgiN' theme="dark"></ReCAPTCHA>
							</Col>
							<Col className='mb-20' sm="12">
								<Button type='submit' className='custom-button right'>{t("contact-me.send")}</Button>
							</Col>
						</Row>
					</Col>
					<Col sm="12" md="6">
						<img className='cropped' alt="Profile" src='profile.jpeg' />
					</Col>
				</Row>
			</form>
		</section>
	)
}

export default Contact;