import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import ModelViewer from './3D/ModelViewer';

const Home = () => {
	const [t] = useTranslation("global");

	useEffect(() => {
		const MAX_HEIGHT = document.body.scrollHeight;
		let element = document.getElementById("content-home");
		
		window.addEventListener("scroll", () => {
			requestAnimationFrame(() => {
				let value = window.scrollY;
				if (value <= MAX_HEIGHT) element.style.top = value * 0.8 + 'px';
			});
});
	});

	return (
		<section id="home" data-nav="home" className='hidden'>
			<div id='content-home'>
				<Row>
					<Col sm="12" md="12" lg="7">
						<h1 className='heading-2 mt-0'>
							<span className='accent-color'>{t("home.hello")}</span>
						</h1>
						<h1 className='heading-1 mt-0'>
							{t("home.header")}
						</h1>
						<div>
							<p className='heading-3'>{t("home.description")}</p>
							<p className="quote text-l">{t("home.quote")}</p>
						</div>
					</Col>
					<Col sm="12" md="12" lg="5">
						<ModelViewer modelPath={"logo/logo.glb"} />
					</Col>
				</Row>
				<div id="more" className='text-center'>
					<a href="#about"> {t("home.more")} <i className='bx bx-down-arrow-alt bx-fade-down' ></i></a>
				</div>
			</div>
		</section>

	)
}

export default Home;   