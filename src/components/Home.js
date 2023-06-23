import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import ModelViewer from './3D/ModelViewer';

const Home = () => {
	const [t] = useTranslation("global");

	return (
		<>
			<section id="home" data-nav="home" className='hidden'>
				<ModelViewer modelPath="./logo/logo.glb" />
				<div id='content-home'>
					<Row>
						<Col sm="12" md="12" lg="7">
							<h2 className='m-0'>{t("home.hello")}</h2>
							<h1 className='mt-0 main'>
								{t("home.header")}
							</h1>
							<div>
								<p>{t("home.description")}</p>
							</div>
						</Col>
					</Row>
				</div>
			</section>
			<span id="more" className='text-center'>
				<a href="#about"> {t("home.more")} <i className='bx bx-down-arrow-alt bx-fade-down' ></i></a>
			</span>
		</>
	)
}

export default Home;   