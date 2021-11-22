import React from 'react';
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaLinkedin,
    FaGithub,
    FaBitbucket
} from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <p>portfolio © {new Date().getFullYear()} All Rights Reserved</p>
                <ul>
                    <li><a href='https://www.linkedin.com/in/hossain-ahmad-555826b3'><FaLinkedin /></a></li>
                    <li><a href='https://www.github.com/hossain24'><FaGithub /></a></li>
                    <li><a href='https://bitbucket.org/hossain24'><FaBitbucket /></a></li>
                </ul>
            </div>
        </>
    );
}

export default Footer;
