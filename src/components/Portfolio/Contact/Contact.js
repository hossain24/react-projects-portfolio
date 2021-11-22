import React from 'react';
import './contact.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div className="Contact" id="contact">
                <h1>Contact Me</h1>
                <Container>
                    <Row>
                        <Col sm={6} className="Image-Info">
                            <img src="./images/svg/mobile/m15.svg" alt="profile-pic" />
                        </Col>
                        <Col sm={6} className="Contact-Info">
                            <form action="mailto:ctg.bd24@gmail.com" method="post" encType="txt/plain" className="form">
                                <label className="label">Name:</label><br />
                                <input type="text" id="name" name="name" className="form-element"></input><br /><br />
                                <label className="label">Email:</label><br />
                                <input type="email" id="email" name="email" className="form-element"></input><br /><br />
                                <label className="label">Message:</label><br />
                                <textarea type="text" id="message" name="message" rows="4" className="form-element"></textarea><br />
                                <input type="submit" name="submit" value="Submit" className="button"></input>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Contact;
