import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import './index.scss';

const Home = () => {
    const [t] =  useTranslation("global");
    
    return (
        <section id="home">
            <Row>
                <Col sm="12" md="9" className='fade-in-first'>
                    <h1 className='text-l justify'>
                        <span className='highlighted-text'>{ t("home.hello") }</span>
                    </h1>
                    <h1 className='text-xl justify'>
                        { t("home.header") }
                    </h1>
                    <div>
                        <p className='justify text-m'>{ t("home.description") }</p>
                        <p className="quote text-l">{ t("home.quote") }</p>
                    </div>
                </Col>
                <Col sm="12" md="3" className='fade-in-first'>
                    <img alt="Profile" src='profile.jpeg'/>
                </Col>
            </Row>
        </section>
       
    )
}

export default Home;   