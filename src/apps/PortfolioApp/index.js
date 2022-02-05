import React, { useState } from 'react';
import Navigation from '../../components/Portfolio/Navigation/Navigation';
import MobileNavigation from '../../components/Portfolio/MobileNavigation/MobileNavigation';
import Landing from '../../components/Portfolio/Landing/Landing';
import About from '../../components/Portfolio/About/About';
import CurrentProjects from '../../components/Portfolio/CurrentProjects/CurrentProjects';
import Projects from '../../components/Portfolio/Projects/Projects';
import Contact from '../../components/Portfolio/Contact/Contact';
import Footer from '../../components/Portfolio/Footer/Footer';
// import BookAPI from '../../components/Projects/BookAPI/BookAPI';
// import SignIn from '../../components/Projects/BookAPI/SignIn';
// import SignUp from '../../components/Projects/BookAPI/SignUp';


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
            <CurrentProjects />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default PortfolioApp;
