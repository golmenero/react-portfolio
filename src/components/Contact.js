import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Input, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import ReCAPTCHA from 'react-google-recaptcha';
import Tilt from 'react-parallax-tilt';
import CustomButton from './CustomButton';

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
					<h1>{t("navigation.contact-me")}</h1>
				</Row>
				<Row>
					<p>cgomezcolmenero@gmail.com</p>
				</Row>
				<Row>
					<Col sm="12" md="12" lg="6">
						<Tilt tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
							<div className="card-panel gradient">
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
										<ReCAPTCHA ref={captcha} sitekey='6Lf1cnAjAAAAANcNeOWfKFE11Mk-D2BYHHJxxgiN' theme="light"></ReCAPTCHA>
									</Col>
									<Col className='mb-20' sm="12">
										<CustomButton type="submit" icon="bx bx-send" href="" text={ t("contact-me.send") }></CustomButton>
									</Col>
								</Row>
							</div>
						</Tilt>
					</Col>
					<Col sm="12" md="12" lg="6" className='text-center'>
						<Tilt className='h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
							<div className="content-centered">
								<h2>{t("contact-me.value-1")}</h2>
								<h1>{t("contact-me.value-2")}<i className='bx bxs-happy-beaming' ></i></h1>
							</div>
						</Tilt>
					</Col>
				</Row>
			</form>
		</section>
	)
}

export default Contact;