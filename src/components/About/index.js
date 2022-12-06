import { Col, Row } from 'reactstrap';
import './index.scss';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

const AboutItem = ({ img, title, subtitle}) => {
    
    return (
        <Row data-img={img}>
            <Col sm="12">
                <h2 className='heading-2'>{ title }</h2>
            </Col>
            <Col sm="12">
                <p className='heading-3'> { subtitle }</p>
            </Col>
        </Row>
    )
}

const About = () => {
    const [t] =  useTranslation("global");

    useEffect(() => {
        console.log(document.querySelectorAll("[data-img]"));
        document.querySelectorAll("[data-img]").forEach((element) => {
            element.addEventListener('click', (event) => {
                document.querySelectorAll(".img-about").forEach((element) => {
                    element.classList.add("d-none");
                });
                let img = element.getAttribute("data-img") + "-img";
                document.getElementById(img).classList.remove("d-none");
            });
        });
    });
    
    return (
        <section id="about" className='animate-on-scroll' data-nav="about">
            <Row>
                <h1 className='heading-1'>{ t("navigation.about") }</h1>
                <p className='heading-3'>{ t("about.header") }</p>
            </Row>
            <Row>
                <Col sm="12" md="6">
                    <AboutItem img="education" title={ t("about.education.title") } subtitle={ t("about.education.subtitle") }></AboutItem>
                    <AboutItem img="languages" title={ t("about.languages.title") } subtitle={ t("about.languages.subtitle") }></AboutItem>
                    <AboutItem img="experience" title={ t("about.experience.title") } subtitle={ t("about.experience.subtitle") }></AboutItem> 
                </Col>
                <Col sm="12" md="6" id="container-images-about" className='my-auto'>
                    <Col sm="12" className='p-4'>
                        <img id="education-img" className='img-about w-100 d-none' alt="Education" src="uniovi.jpg" />
                        <img id="languages-img" className='img-about w-100 d-none' alt="Languages" src="ukspain.jpg" />
                        <img id="experience-img" className='img-about w-100 d-none' alt="Experience" src="idealista.jpg" />
                    </Col>
                </Col>
            </Row>
        </section>
       
    )
}

export default About;