import React from 'react';
import '.././App';

function About () {

    return (
      <div className="Content">
          <div className="ContentTitle">About me</div>
          <img src="/brick_wall_selfie.JPG" alt="" width="120px"/>
          <div className="ContentText">
            <p>I currently live in Madison, Wisconsin, and I grew up in Eau Claire, WI. 
              I went to college at Pomona College in Claremont, CA where I double majored in Computer Science and Mathematics.</p>
            <p>Since then, I spent nearly 3 years working at Epic Systems, Inc (an enterprise healthcare software company, not the people who make Fortnite) 
              as a full stack software engineer working on the Registration team. 
              I recently left to enjoy the summer and to eventually explore other exciting software development opportunities.</p>
            <p>
              Work-wise, I've also had some pretty cool internships. 
              I spent a couple summers driving around Wisconsin doing safety checks and taking inventory of railroad crossings (way more fun than that might seem).
              I also spent a summer working for MultiTech Systems, Inc where I made an Android app that could interface with embedded systems devices.</p>            
            <p>I'm passionate about personal finance, camping, music, and much more.
              A goal of mine is to visit all U.S. national parks, all 50 states, and to see how far I can get on countries.</p>
            <p>Current Stats:</p>
            <ul>
              <li>National Parks: 26/63</li>
              <li>U.S States: 43/50</li>
              <li>Countries: 20/~195</li> 
            </ul>
            <p>If you'd like to get in touch, my email is: afstape at gmail dot com</p>
          </div>
      </div>
    );
  }
  
  export default About;