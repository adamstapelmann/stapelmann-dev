import React from 'react';
import '.././App';

function About () {
    return (
      <div className="Content">
        <div className="ContentTitle">About me</div>
        <div className="ContentText">
          <img src="/brick_wall_selfie_square.JPG" alt="Adam Stapelmann" className="AboutImage" />
          <div className="ContentSection">
            <h3>Background</h3>
            <p>Wisconsin native, now based in Minneapolis. I studied Math and Computer Science at Pomona College 
              in Southern California.</p>
          </div>

          <div className="ContentSection">
            <h3>What I'm up to</h3>
            <p>Currently working on network security at AWS. Before this, I spent a few years at Epic Systems 
              building healthcare software.</p>
          </div>

          <div className="ContentSection">
            <h3>Contact</h3>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg> 
              first + last @ gmail
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
              <a href="https://twitter.com/adamstapelmann" target="_blank" rel="noopener noreferrer" className="ProjectLink">@adamstapelmann</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default About;