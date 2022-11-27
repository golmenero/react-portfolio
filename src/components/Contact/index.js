import { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import Loader from 'react-loaders';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const [t] =  useTranslation("global");

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_uvtbzrc',
                'template_t09q0eo',
                refForm.current,
                'JdLbK0qEeZkA1b5Ik'
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

    return (
        <>
        <Container className='fade-in-first'>
            <form ref={refForm} onSubmit={sendEmail}>
                <Row className='fade-in-first'>
                    <h1 className='highlighted-text'>{ t("navigation.contact-me") }</h1>
                    <p className='section-subtitle text-m'>{ t("contact-me.header") }</p>
                </Row>
                <div className='fade-in-second'>
                    <Row>
                        <Col sm='12' md="3">
                            <Input type="text" name='name' placeholder={ t("contact-me.name") } required />
                        </Col>
                        <Col sm='12' md="3">
                            <Input type="email" name='email' placeholder={ t("contact-me.email") } required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Input placeholder={ t("contact-me.subject") } type="text" name="subject" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Input type="textarea" placeholder={ t("contact-me.message") } name='message' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Button type='submit' className='flat-button right'>{ t("contact-me.send") }</Button>
                        </Col>
                    </Row>
                </div>
            </form>
        </Container>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact;