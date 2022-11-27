import { useTranslation } from 'react-i18next';
import Loader from 'react-loaders';
import { Col, Container, Row } from 'reactstrap';
import './index.scss';

const Home = () => {
    const [t] =  useTranslation("global");
    
    return (
        <>
            <Container>
                <div id="home">
                    <Row>
                        <Col sm="12" md="9">
                            <h1 className='fade-in-first text-l justify'>
                                <span className='highlighted-text'>{ t("home.hello") }</span>
                            </h1>
                            <h1 className='fade-in-first text-xl justify'>
                                { t("home.header") }
                            </h1>
                            <div className='fade-in-second'>
                                <p className='justify text-m'>{ t("home.description") }</p>
                                <p className="quote text-l">{ t("home.quote") }</p>
                            </div>
                        </Col>
                        <Col sm="12" md="3">
                            <img className='fade-in-first' alt="Profile" src='profile.jpeg'/>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Loader type="ball-scale-ripple-multiple" />
        </>
       
    )
}

export default Home;   