import React, { useEffect, useRef } from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Typed from "typed.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

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

    const el1 = useRef(null);
    const el2 = useRef(null);

    useEffect(() => {
        const typed = new Typed(el1.current, {
            strings: ["HTML, CSS, JavaScript, React, Angular, Ember <br /> Tailwind, Material, ^1000\n `Bootstrap, Styled, SASS, LESS`"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 200,
            backDelay: 100,
            smartBackspace: true,
            loop: false,
            showCursor: true,
            cursorChar: "|"
        });


        const typed2 = new Typed(el2.current, {
            strings: ["JavaScript, Node, Express, C#, .NET Core, Entity Framework <br/> MongoDB, MSSQL, MySQL"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 200,
            backDelay: 100,
            smartBackspace: true,
            loop: false,
            showCursor: true,
            cursorChar: "|"
        });


        return () => {
            typed.destroy();
            typed2.destroy();
        };
    }, []);

    return (
        <>
            <div className="About" id="about">
                <h2>Web Technologies Are Being Used</h2>
                <Container>
                    <Row>
                        <Col sm={6} className="Info-Section gs_reveal_fromLeft">
                            <h3>Frontend</h3>
                            <li><span ref={el1}></span></li>
                            <br />
                            <h3>Backend</h3>
                            <li></li>
                            <li></li>
                            <li><span ref={el2}></span></li>
                        </Col>
                        <Col sm={6} className="Image-Section gs_reveal_fromRight">
                            <img src="./images/svg/mobile/m12.svg" alt="profile-pic" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;
