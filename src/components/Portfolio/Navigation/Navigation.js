import React, { useState, useEffect } from 'react';
import './navigation.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
// import '../../../custom-js/navigation';


const Navbar = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#101522' : 'transparent')};
    height: 60px;
    padding-top: 10px;
    position: fixed;
    width: 100%;
    z-index: 10;
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #4584aa;
    }
`

const Navigation = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else setScrollNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    return (
        <>
            <Navbar scrollNav={scrollNav}>
                <div className="Menubar">
                    <div className="Logo">
                        <p><a href="/">portfolio</a></p>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                    </div>
                    <div className="Navigation" id="Navigation" data-visible="false">
                        <ul>
                            <li><Link to="about" className="Link">About</Link></li>
                            <li><Link to="current-projects" className="Link">Current Projects</Link></li>
                            <li><Link to="projects" className="Link">Projects</Link></li>
                            <li><Link to="contact" className="Link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </Navbar>
        </>
    );
}

export default Navigation;
