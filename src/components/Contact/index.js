import { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import Loader from 'react-loaders';

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
        <Container className='fade-in-first'>
            <form ref={refForm} onSubmit={sendEmail}>
                <Row className='fade-in-first'>
                    <h1 className='highlighted-text'>Contact Me</h1>
                    <p className='section-subtitle text-m'>I will be happy to answer any questions you have.</p>
                </Row>
                <div className='fade-in-second'>
                    <Row>
                        <Col sm='12' md="3">
                            <Input type="text" name='name' placeholder='Name' required />
                        </Col>
                        <Col sm='12' md="3">
                            <Input type="email" name='email' placeholder='Email' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Input placeholder='Subject' type="text" name="subject" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Input type="textarea" placeholder='Message' name='message' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <Button type='submit' className='flat-button right'>Contact Me</Button>
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