import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";

const Others = () => {
	const [t] = useTranslation("global");

	return (
		<section id="others" className='hidden' data-nav="others">
			<Row>
				<h1 className='heading-1'>{t("navigation.others")}</h1>
			</Row>
			<div>
				<Row>
					<h2 className='heading-3'>{t("others.header")}</h2>
				</Row>
				<Row>
					<Col sm="12" md="6" lg="4">
						<img className='mb-20' alt="Render 1" src='renders/render_1.png' />
						<img className='mb-20' alt="Render 2" src='renders/render_2.png' />
						<img className='mb-20' alt="Render 3" src='renders/render_6.png' />
					</Col>
					<Col sm="12" md="6" lg="4">
						<img className='mb-20' alt="Render 4" src='renders/render_4.png' />
						<img className='mb-20' alt="Render 5" src='renders/render_5.png' />
						<img className='mb-20' alt="Render 6" src='renders/render_3.png' />
					</Col>
					<Col sm="12" md="6" lg="4">
						<img className='mb-20' alt="Render 7" src='renders/render_7.png' />
						<img className='mb-20' alt="Render 8" src='renders/render_9.png' />
						<img className='mb-20' alt="Render 9" src='renders/render_8.png' />
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Others;