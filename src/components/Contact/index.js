import { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import { Button, Col, Input, Row } from 'reactstrap';

const Contact = () => {
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
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
        <section className='fade-in-third'  id="contact">
            <form ref={refForm} onSubmit={sendEmail}>
                <Row>
                    <h1 className='highlighted-text centered'>Contact Me</h1>
                </Row>
                <Row>
                    <Col sm='12' md="6">
                        <Input bsSize="lg" type="text" name='name' placeholder='Name' required />
                    </Col>
                    <Col sm='12' md="6">
                        <Input bsSize="lg" type="email" name='email' placeholder='Email' required />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input bsSize="lg" placeholder='Subject' type="text" name="subject" required />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input bsSize="lg" type="textarea" placeholder='Message' name='message' required />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type='submit' className='flat-button'>Send</Button>
                    </Col>
                </Row>
            </form>
        </section>
        </>
    )
}

export default Contact;