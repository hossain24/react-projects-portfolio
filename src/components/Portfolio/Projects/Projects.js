import React from 'react';
import './projects.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Projects = () => {
    return (
        <>
            <div className="Projects" id="projects">
                <h1>Projects</h1>
                <div className="ProjectsContainer">
                    <div className="section">
                        <div className="section__item bg-1">
                            <Card className="Card CardOne">
                                <Card.Img src="./images/svg/mobile/m7.svg" />
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
                                    <Button variant="outline-dark">View More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="section__item bg-2">
                            <Card className="Card CardTwo">
                                <Card.Img src="./images/svg/mobile/m23.svg" />
                                <Card.Body>
                                    <Card.Title>.NET Core Web API</Card.Title>
                                    <Card.Text>
                                        Developing a server-side or back-end web application. It includes connecting database with the server, database
                                        modeling, making repository and creating CRUD based RESTful APIs, pulling data through third party APIs and storing
                                        them into own database.
                                        <br /><b>Tools & Technologies:</b> C#, ASP.NET Core, MS SQL, MySQL, MVC, Visual Studio, Postman, ORM / Entity Framework
                                        Core, Git, GitHub, Docker
                                    </Card.Text>
                                    <Button href="/mountain-api" target="_blank" variant="outline-dark">View More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="section__item bg-3">
                            <Card className="Card CardThree">
                                <Card.Img src="./images/svg/mobile/m6.svg" />
                                <Card.Body>
                                    <Card.Title>Implementing OAuth Framework</Card.Title>
                                    <Card.Text>
                                        As a portfolio project, implementing user authentication system and user's authorization framework OAuth in a backend web application.
                                        <br /><b>Tools & Technologies:</b> NodeJS, Express, Passport and MongoDB, OAuth 2.0
                                    </Card.Text>
                                    <Button href="/weather-api" target="_blank" variant="outline-dark">View More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="section__item bg-4">
                            <Card className="Card CardFour">
                                <Card.Img src="./images/svg/mobile/m8.svg" />
                                <Card.Body>
                                    <Card.Title>Gallery Web App</Card.Title>
                                    <Card.Text>
                                        This project is about developing a gallery web application to display images and description from storage.
                                        <br /><b>Tools & Technologies:</b> C#, ASP.NET Core, MVC, MS SQL, ORM / Entity Framework Core, Blob Storage, and
                                        Microsoft Azure
                                    </Card.Text>
                                    <Button variant="outline-dark">View More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="section__item bg-5">
                            <Card className="Card CardFive">
                                <Card.Img src="./images/svg/mobile/m9.svg" />
                                <Card.Body>
                                    <Card.Title>Developing Web-shop</Card.Title>
                                    <Card.Text>
                                        As a portfolio project, developing an online shopping platform and implementing Online payment system.
                                        <br /><b>Tools & Technologies:</b> NodeJS, Express, Passport, MongoDB, Stripe Payment Gateway, Google Cloud: Firebase &
                                        Firestore
                                    </Card.Text>
                                    <Button variant="outline-dark">View More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
