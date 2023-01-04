import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import './index.scss';

const Home = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="home" className='fade-in-down'>
            <img id="logo-img" alt="Logo" src="logo.png"></img>
            <Row>
                <Col sm="12" md="12" lg="7">
                    <h1 className='heading-2 mt-0'>
                        <span className='accent-color'>{ t("home.hello") }</span>
                    </h1>
                    <h1 className='heading-1 mt-0'>
                        { t("home.header") }
                    </h1>
                    <div>
                        <p className='heading-3'>{ t("home.description") }</p>
                        <p className="quote text-l">{ t("home.quote") }</p>
                    </div>
                </Col>
                <Col sm="12" md="12" lg="5">
                    <img className='cropped' alt="Profile" src='profile3.jpg'/>
                </Col>
            </Row>
            <div id="more">
                <a href="#about"> { t("home.more") } <i className='bx bx-down-arrow-alt bx-fade-down' ></i></a>
            </div>
        </section>
       
    )
}

export default Home;   