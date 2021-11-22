import React from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <div className="About" id="about">
                <Container>
                    <Row>
                        <Col sm={6} className="Info-Section">
                            <h2>Web Technologies Are Being Used</h2>
                            <h3>Frontend</h3>
                            <li>HTML, CSS, JavaScrpt, React, Angular, Ember</li>
                            <li>Tailwind, Material, Bootstrap, Styled, SASS, LESS</li>
                            <br />
                            <h3>Backend</h3>
                            <li>JavaScript, Node, Express, C#, .NET Core, Entity Framework</li>
                            <li>MongoDB, MSSQL, MySQL</li>
                        </Col>
                        <Col sm={6} className="Image-Section">
                            <img src="./images/svg/mobile/m12.svg" alt="profile-pic" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;
