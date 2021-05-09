import React from 'react';
import '../styles/App.css';
import LinkEl from '../components/LinkEl';
import Link from '../data/Link';
import LinkData from '../data/LinkData';


function Links () {
    /* get link data */
    const linkData : Array<Link> = LinkData.getLinks();

    /* construct list of book recommendations */
    const links = [];
    for (const link of linkData) {
        links.push(<LinkEl link={link}/>);
    }

    return (
      <div className="Content">
          <div className="ContentTitle">Links</div>
          <div className="ContentText">
              <p>A gathering place for some helpful and interesting links.</p>
          </div>
          <div className="ContentList">{links}</div>          
      </div>
    );
  }
  
  export default Links;