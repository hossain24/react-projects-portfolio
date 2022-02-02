import React from 'react';
import './current-projects.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CurrentProjects = () => {

    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
            duration: 5.00,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
    }

    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () { animateFrom(elem) },
                onEnterBack: function () { animateFrom(elem, -1) },
                onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
            });
        });
    });

    return (
        <>
            <div className="CurrentProjects" id="current-projects">
                <h1>Current Projects</h1>
                <div className="CurrentProjectsContainer">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Card className="CardOne gs_reveal_fromLeft">
                                    <Card.Img src="./images/svg/mobile/m26.svg" />
                                    <Card.Body>
                                        <Card.Title>React Web App</Card.Title>
                                        <Card.Text>
                                            Developing a client-side or front-end web application. It focuses on designing landing page,
                                            invoking APIs to pull data from server side and display them to the client side and also enable
                                            to client-side to create, update and delete data.
                                            <br /><b>Tools & Technologies:</b> HTML, CSS, JavaScript, React, React-Redux, Redux-Toolkit, React-Bootstrap,
                                            FramerMotion, Styled Components, GSAP, ScrollTrigger, VS Code, Git, GitHub, Heroku Cloud,
                                            Netlify Cloud
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="CardTwo gs_reveal_fromRight">
                                    <Card.Img src="./images/svg/mobile/m25.svg" />
                                    <Card.Body>
                                        <Card.Title>.NET Core Web API</Card.Title>
                                        <Card.Text>
                                            Developing a server-side or back-end web application. It includes connecting database with the server, database
                                            modeling, making repository and creating CRUD based RESTful APIs, pulling data through third party APIs and storing
                                            them into own database.
                                            <br /><b>Tools & Technologies:</b> C#, ASP.NET Core, MS SQL, MySQL, MVC, Visual Studio, Postman, ORM / Entity Framework
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
