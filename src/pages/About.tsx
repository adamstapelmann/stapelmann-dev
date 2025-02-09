import React from 'react';
import '.././App';

function About () {
    return (
      <div className="Content">
          <div className="ContentTitle">About me</div>
          <img src="/stone_current_selfie.jpeg" alt=""width="250px"/>
          <div className="ContentText">
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

            <p>Feel free to reach out at afstape at gmail dot com</p>
          </div>
      </div>
    );
  }
  
export default About;