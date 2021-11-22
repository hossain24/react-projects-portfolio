import React from 'react';
import './projects.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Projects = () => {
    return (
        <>
            <div className="Projects" id="projects">
                <h1>Projects</h1>
                <div className="ProjectsContainer">
                    <div className="section">
                        <div className="section__item bg-1">
                            <Card className="CardOne" sx={{ width: 400, height: 650 }} style={{ background: '#1769aa' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="./images/svg/mobile/m1.svg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            React Web App
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Developing a client-side or front-end web application. It focuses on designing landing page, invoking APIs to pull data
                                            from server side and display them to the client side and also enable to client-side to create, update and delete data.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ color: '#fff' }}>
                                        Show
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="section__item bg-2">
                            <Card sx={{ width: 400, height: 650 }} style={{ background: '#4caf50' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="./images/svg/mobile/m22.svg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            .NET Core Web API
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Developing a server-side or back-end web application. It includes connecting database with the server, database
                                            modeling, making repository and creating CRUD based RESTful APIs, pulling data through third party APIs and storing
                                            them into own database.
                                            <br />Tools & Technologies: C#, ASP.NET Core, MS SQL, MySQL, MVC, Visual Studio, Postman, ORM / Entity Framework
                                            Core, Git, GitHub, Docker
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ color: '#fff' }}>
                                        Show
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="section__item bg-3">
                            <Card sx={{ width: 400, height: 650 }} style={{ background: '#009688' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="./images/svg/mobile/m20.svg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Implementing OAuth Framework
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            As a portfolio project, implementing user authentication system and user's authorization framework OAuth in a backend web application.
                                            <br />Tools & Technologies: NodeJS, Express, Passport and MongoDB, OAuth 2.0
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ color: '#fff' }}>
                                        Show
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="section__item bg-4">
                            <Card sx={{ width: 400, height: 650 }} style={{ background: '#e91e63' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="./images/svg/mobile/m21.svg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Gallery Web App
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            This project is about developing a gallery web application to display images and description from storage.
                                            <br />Tools & Technologies: C#, ASP.NET Core, MVC, MS SQL, ORM / Entity Framework Core, Blob Storage, and
                                            Microsoft Azure
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ color: '#fff' }}>
                                        Show
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="section__item bg-5">
                            <Card sx={{ width: 400, height: 650 }} style={{ background: '#ed4b82' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="./images/svg/mobile/m25.svg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Developing Web-shop
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            As a portfolio project, developing an online shopping platform and implementing Online payment system.
                                            <br />Tools & Technologies: NodeJS, Express, Passport, MongoDB, Stripe Payment Gateway, Google Cloud: Firebase &
                                            Firestore
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" style={{ color: '#fff' }}>
                                        Show
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
