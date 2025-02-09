import React from 'react';
import '../styles/App.css';

function Projects() {
    return (
        <div className="Content">
            <div className="ContentTitle">Projects</div>
            <div className="ContentText">
                <div className="ProjectCard">
                    <h3>domainideas.ai</h3>
                    <p className="ProjectDescription">
                        An AI-powered domain name generator that helps users discover available domain names 
                        based on their ideas and requirements. Users can generate creative domain suggestions 
                        and instantly check their availability.
                    </p>
                    <a href="https://domainideas.ai" target="_blank" rel="noopener noreferrer" 
                       className="ProjectLink">Visit domainideas.ai →</a>
                </div>

                <div className="ProjectCard">
                    <h3>wealthwatch.app</h3>
                    <p className="ProjectDescription">
                        A personal finance visualization tool that provides users with detailed insights into 
                        their net worth. Users can track various assets and see comprehensive breakdowns and 
                        visualizations of their financial portfolio.
                    </p>
                    <a href="https://wealthwatch.app" target="_blank" rel="noopener noreferrer" 
                       className="ProjectLink">Visit wealthwatch.app →</a>
                </div>
            </div>
        </div>
    );
}

export default Projects; 