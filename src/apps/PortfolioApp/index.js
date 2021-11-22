import React, { useState } from 'react';
import Navigation from '../../components/Portfolio/Navigation/Navigation';
import Landing from '../../components/Portfolio/Landing/Landing';
import About from '../../components/Portfolio/About/About';
import ProjectFour from '../../components/Portfolio/CurrentProjects/CurrentProjects';
import Projects from '../../components/Portfolio/Projects/Projects';
import Footer from '../../components/Portfolio/Footer/Footer';
import Contact from '../../components/Portfolio/Contact/Contact';
import MobileNavigation from '../../components/Portfolio/MobileNavigation/MobileNavigation';


const PortfolioApp = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <MobileNavigation isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            <Landing />
            <About />
            <ProjectFour />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default PortfolioApp;
