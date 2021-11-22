import React from 'react';
import './current-projects.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';

const CurrentProjects = () => {
    return (
        <>
            <div className="CurrentProjects" id="current-projects">
                <h1>Current Projects</h1>
                <div className="CurrentProjectsContainer">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Card className="CardOne">
                                    <Card.Img src="./images/svg/mobile/m26.svg" />
                                    <Card.Body>
                                        <Card.Title>React Web App</Card.Title>
                                        <Card.Text>
                                            Developing a client-side or front-end web application. It focuses on designing landing page,
                                            invoking APIs to pull data from server side and display them to the client side and also enable
                                            to client-side to create, update and delete data.<br />
                                            Tools & Technologies: HTML, CSS, JavaScript, React, React-Redux, Redux-Toolkit, React-Bootstrap,
                                            FramerMotion, Styled Components, GSAP, ScrollTrigger, VS Code, Git, GitHub, Heroku Cloud,
                                            Netlify Cloud
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="CardTwo">
                                    <Card.Img src="./images/svg/mobile/m25.svg" />
                                    <Card.Body>
                                        <Card.Title>.NET Core Web API</Card.Title>
                                        <Card.Text>
                                            Developing a server-side or back-end web application. It includes connecting database with the server, database
                                            modeling, making repository and creating CRUD based RESTful APIs, pulling data through third party APIs and storing
                                            them into own database.<br />
                                            Tools & Technologies: C#, ASP.NET Core, MS SQL, MySQL, MVC, Visual Studio, Postman, ORM / Entity Framework
                                            Core, Git, GitHub, Docker
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container >
                </div >
            </div >
        </>
    );
}

export default CurrentProjects;
