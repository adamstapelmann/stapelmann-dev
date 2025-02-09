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
                        <a href="https://wealthwatch.app" className="ProjectTitle" target="_blank" rel="noopener noreferrer">wealthwatch.app</a>
                    </div>
                    <div className="ProjectMeta">
                        <a href="https://wealthwatch.app" className="ProjectLink" target="_blank" rel="noopener noreferrer">
                            Visit →
                        </a>
                    </div>
                </div>

                <div className="ProjectDescription">
                    A personal finance visualization tool that provides users with detailed insights into 
                    their net worth. Users can track various assets and see comprehensive breakdowns and 
                    visualizations of their financial portfolio.
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