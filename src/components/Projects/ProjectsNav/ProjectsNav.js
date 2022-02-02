import React from 'react';
import './projects-nav.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsNav = () => {
    return (
        <>
            <div className="ProjectsNav">
                <ul>
                    <li className="ProjectsLink"><a href="/mountain-api" target="_blank">Mountains</a></li>
                    <li className="ProjectsLink"><a href="/weather-api" target="_blank">Weather</a></li>
                </ul>
            </div>
        </>
    );
}

export default ProjectsNav;
