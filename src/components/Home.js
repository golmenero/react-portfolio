import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import CustomButton from './CustomButton';

const Home = () => {
	const [t] = useTranslation("global");

	return (
		<>
			<section id="home" data-nav="home" className='hidden'>
				<div id='content-home'>
					<Row>
						<Col sm="12" md="8" lg="8">
							<h2 className='m-0'>{t("home.hello")}</h2>
							<h1 className='mt-0 main'>
								{t("home.header")}
							</h1>
							<div>
								<p>{t("home.description")}</p>
							</div>
							<div>
								<CustomButton type="text" icon='bx bxl-linkedin' href="https://www.linkedin.com/in/carlos-gomez-colmenero/" text="LinkedIn"></CustomButton>
								<CustomButton type="text" icon='bx bxl-github' href="https://github.com/golmenero" text="GitHub"></CustomButton>
								<CustomButton type="text" icon='bx bxl-gmail' href="#contact" text="E-Mail"></CustomButton>
								<CustomButton type="text" icon='bx bx-arrow-from-top' href={t("about.download-url")} text={'CV'}></CustomButton>
							</div>
						</Col>
						<Col sm="12" md="4" lg="4">
							<img alt="Carlos Gómez" src="profile/line_dark.png"></img>
						</Col>
					</Row>
				</div>
			</section>
			<span id="more" className='text-center'>
				<a href="#skills"> {t("home.more")} <i className='bx bx-down-arrow-alt bx-fade-down' ></i></a>
			</span>
		</>
	)
}

export default Home;   