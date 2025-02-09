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
            <p>Reach out at afstape at gmail dot com</p>
          </div>
        </div>
      </div>
    );
  }
  
export default About;