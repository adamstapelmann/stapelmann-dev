import React from 'react';
import '../styles/App.css';

function Projects() {
    return (
        <div className="Content">
            <div className="ContentTitle">Projects</div>
            <div className="ProjectList">
                <div className="ProjectCard">
                    <div className="ProjectInfo">
                        <a href="https://domainideas.ai" className="ProjectTitle" target="_blank" rel="noopener noreferrer">domainideas.ai</a>
                    </div>
                    <div className="ProjectMeta">
                        <a href="https://domainideas.ai" className="ProjectLink" target="_blank" rel="noopener noreferrer">
                            Visit →
                        </a>
                    </div>
                </div>

                <div className="ProjectDescription">
                    An AI-powered domain name generator that helps users discover available domain names 
                    based on their ideas and requirements. Users can generate creative domain suggestions 
                    and instantly check their availability.
                </div>

                <div className="ProjectCard">
                    <div className="ProjectInfo">
                        <a href="https://finance-toolkit.com" className="ProjectTitle" target="_blank" rel="noopener noreferrer">finance-toolkit.com</a>
                    </div>
                    <div className="ProjectMeta">
                        <a href="https://finance-toolkit.com" className="ProjectLink" target="_blank" rel="noopener noreferrer">
                            Visit →
                        </a>
                    </div>
                </div>

                <div className="ProjectDescription">
                    A collection of online financial tools, such as calculators, designed to help users 
                    with various financial planning and analysis tasks.
                </div>

                <div className="ProjectCard">
                    <div className="ProjectInfo">
                        <a href="https://clearcreektimberframers.com" className="ProjectTitle" target="_blank" rel="noopener noreferrer">clearcreektimberframers.com</a>
                    </div>
                    <div className="ProjectMeta">
                        <a href="https://clearcreektimberframers.com" className="ProjectLink" target="_blank" rel="noopener noreferrer">
                            Visit →
                        </a>
                    </div>
                </div>

                <div className="ProjectDescription">
                    A custom website created for a friend's timber framing business, showcasing their craftsmanship, 
                    services, and portfolio of completed projects.
                </div>

                <div className="ProjectCard">
                    <div className="ProjectInfo">
                        <a href="https://stapelmann.dev" className="ProjectTitle" target="_blank" rel="noopener noreferrer">stapelmann.dev</a>
                    </div>
                    <div className="ProjectMeta">
                        <a href="https://stapelmann.dev" className="ProjectLink" target="_blank" rel="noopener noreferrer">
                            Visit →
                        </a>
                    </div>
                </div>

                <div className="ProjectDescription">
                    This website.
                </div>
            </div>
        </div>
    );
}

export default Projects; 