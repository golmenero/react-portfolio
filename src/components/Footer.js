import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

const Footer = () => {
	const [t] = useTranslation("global");

	return (
		<div id='footer'>
			<Row>
				<Col sm="12" className='m-0'>
					<div className='text-center'>
						<h2>{t("footer.header")}</h2>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Footer;