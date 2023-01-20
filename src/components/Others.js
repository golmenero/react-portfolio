import { Col, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import CarouselElem from './CarouselElem';

const Others = () => {
	const [t] = useTranslation("global");

	const items = [
		{src: 'renders/render_1.png', caption: 'Render 1'},
		{src: 'renders/render_2.png', caption: 'Render 2'},
		{src: 'renders/render_4.png', caption: 'Render 4'},
		{src: 'renders/render_5.png', caption: 'Render 5'},
		{src: 'renders/render_3.png', caption: 'Render 3'},
		{src: 'renders/render_7.png', caption: 'Render 7'},
		{src: 'renders/render_9.png', caption: 'Render 9'},
		{src: 'renders/render_8.png', caption: 'Render 8'}
	];

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
					<Col sm="12">
						<CarouselElem items={items}></CarouselElem>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Others;