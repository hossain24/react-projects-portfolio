import React from 'react';
import './landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

const Landing = () => {
    return (
        <>
            <div className="Landing" id="home">
                <Container fluid="md" className="Container">
                    <Row>
                        <Col sm={8} className="Image-Section">
                            <img src="./images/svg/mobile/m2.svg" alt="landing-pic" />
                        </Col>
                        <Col sm={4} className="Text-Section">
                            <h1>Hossain Ahmad</h1>
                            <h4>IT Engineer & Developer</h4>
                            <br />
                            <p>I do develop both the Frontend & Backend of Web Application using various tools & technologies</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default Landing;
