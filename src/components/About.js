import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import Tilt from 'react-parallax-tilt';
import { useEffect } from 'react';
import CustomButton from './CustomButton';

const AboutItem = ({ img, icon, title, subtitle }) => {

	return (
		<Row className="mb-10">
			<Col sm="12">
				<h2>{title}</h2>
			</Col>
			<Col sm="12">
				<p> {subtitle}</p>
			</Col>
		</Row>
	)
}

const About = () => {
	const [t] = useTranslation("global");

	function getDateDifference(date1, date2) {
		let year1 = date1.getFullYear();
		let year2 = date2.getFullYear();
		let months1 = date1.getMonth();
		let months2 = date2.getMonth();
		let days1 = date1.getDate();
		let days2 = date2.getDate();
		
		let yearsDiff = year2 - year1;
		let monthsDiff = months2 - months1;
		let daysDiff = days2 - days1;
		
		if (daysDiff < 0) {
			let prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
			daysDiff = prevMonth.getDate() - days1 + days2;
			monthsDiff--;
		}
		if (monthsDiff < 0) {
			monthsDiff += 12;
			yearsDiff--;
		}
		return { years: yearsDiff, months: monthsDiff, days: daysDiff };
	}

	useEffect(() => {
		let life_calendar = document.getElementById("lifeCalendar");
		life_calendar.innerHTML = "";

		let diff = getDateDifference(new Date(1998, 4, 15), new Date());

		for (let i = 0; i < diff.years; i++) {
			let black = document.createElement("span");
			black.classList.add("black-year");

			life_calendar.appendChild(black);
		}

		for (let i = 0; i < 90 - diff.years; i++) {
			let white = document.createElement("span");
			white.classList.add("white-year");

			life_calendar.appendChild(white);
		}

		let years_div = document.getElementById("years_div");
		years_div.textContent = diff.years;

		let months_div = document.getElementById("months_div");
		months_div.textContent = diff.months;

		let days_div = document.getElementById("days_div");
		days_div.textContent = diff.days;
	});


	return (
		<section id="about" className='hidden' data-nav="about">
			<Row>
				<h1>{t("navigation.about")}</h1>
			</Row>
			<Tilt className='h-100 mb-10' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
				<div className="card-panel">
					<Row>
						<Col sm="12" md="12" lg="7">
							<AboutItem img="about/education.png" icon="bx bxs-graduation" title={t("about.education.title")} subtitle={t("about.education.subtitle")}></AboutItem>
							<AboutItem img="about/language.png" icon="bx bx-globe" title={t("about.languages.title")} subtitle={t("about.languages.subtitle")}></AboutItem>
							<AboutItem img="about/work.png" icon="bx bx-wrench" title={t("about.experience.title")} subtitle={t("about.experience.subtitle")}></AboutItem>
						</Col>
						<Col sm="12" md="12" lg="5">
							<Row className='mb-10'>
								<Col sm="12">
									<img src="profile/line_dark.png"></img>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Tilt>
			<Row>
				<Col className='mb-10' sm="12" md="12" lg="6">
					<Tilt className='h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
						<div className="card-panel">
							<h2>{t("about.life.title")}</h2>
							<Row>
								<Col sm="6">
									<div id="lifeCalendar"></div>
								</Col>
								<Col sm="6">
									<div className='text-center' id="time_alive">
										<div className='fs-xxl'>
											<span id="years_div"></span> {t("about.life.years")}
										</div>
										<div className='fs-s'>
											<span id="months_div"></span> {t("about.life.months")}, <span id="days_div"></span> {t("about.life.days")}
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Tilt>
				</Col>
				<Col className='mb-10' sm="12" md="6" lg="3">
					<Tilt className='h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
						<div className="card-panel gradient">
							<h2>{t("about.socials.title")}</h2>
							<Row>
								<Col sm="12" className='text-center mb-10'>
									<CustomButton type="text" icon='bx bxl-linkedin' href="https://www.linkedin.com/in/carlos-gomez-colmenero/" text="LinkedIn"></CustomButton>
								</Col>
								<Col sm="12" className='text-center mb-10'>
									<CustomButton type="text" icon='bx bxl-github' href="https://github.com/golmenero" text="GitHub"></CustomButton>
								</Col>
								<Col sm="12">
									<CustomButton type="text" icon='bx bxl-gmail' href="#contact" text="E-Mail"></CustomButton>
								</Col>
							</Row>
						</div>
					</Tilt>
				</Col>
				<Col className='mb-10' sm="12" md="6" lg="3">
					<Tilt className='h-100' tiltMaxAngleX="1" tiltMaxAngleY="1" scale="1.01">
						<div className="card-panel gradient">
							<h2>{t("about.location.title")}</h2>
							<div className='fs-xl flex'>Oviedo</div>
							<div className='fs-s'>Asturias, España
								<a className='right' href="https://goo.gl/maps/4zkKbKJ8XXn4GbPCA"><i className='bx bxs-right-arrow-alt bx-fade-right'></i></a>
							</div>
						</div>
					</Tilt>
				</Col>
			</Row>
			
		</section>
	)
}

export default About;