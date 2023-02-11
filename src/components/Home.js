import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

const Home = () => {
	const [t] = useTranslation("global");

	useEffect(() => {
		const MAX_HEIGHT = document.body.scrollHeight;
		let element = document.getElementById("content-home");
		
		window.addEventListener("scroll", () => {
			let value = window.scrollY;
			if (value <= MAX_HEIGHT) {
				element.style.top = value * 0.8 + 'px';
			}
		});
	});

	return (
		<section id="home" data-nav="home" className='hidden'>
			<div id='content-home'>
				<Row>
					<Col sm="12" md="12" lg="7">
						<h2 className='m-0'>{t("home.hello")}</h2>
						<h1 className='mt-0 main'>
							{t("home.header")}
						</h1>
						<div>
							<p>{t("home.description")}</p>
							<p className="quote">"{t("home.quote")}"</p>
						</div>
					</Col>
					<Col sm="12" md="12" lg="5">
						<img src="logo/logo3.png" id="img_logo" alt="Logo"></img>
					</Col>
				</Row>
			</div>
		</section>

	)
}

export default Home;   