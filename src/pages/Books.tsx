import React from 'react';
import '../styles/App.css';
import LinkEl from '../components/LinkEl';
import Link from '../data/Link';
import BookData from '../data/BookData';

/* Page with book information */
function Books () {
    /* get book data */
    const bookRecs : Array<Link> = BookData.getRecs();
    const booksUnread : Array<Link> = BookData.getUnread();

    /* construct list of book recommendations */
    const recEl = [];
    for (const book of bookRecs) {
        recEl.push(<LinkEl link={book}/>);
    }

    /* construct reading list of books */
    const unreadEl = [];
    for (const book of booksUnread) {
        unreadEl.push(<LinkEl link={book}/>);
    }

    return (
      <div className="Content">
          {/* Reading list  */}
          <div className="ContentTitle">Reading List</div>
          <p className="ContentText">
            These are books that I currently have that I plan on reading. 
            Hopefully listing them publicly provides some accountability that will lead to me reading them faster. 
            If you have any suggestions, let me know.
          </p>
          <div className="ContentList">{unreadEl}</div>

          {/* Recommendations */}
          <div className="ContentTitle">Recommendations</div>
          <div className="ContentList">{recEl}</div>
      </div>
    );
  }
  
  export default Books;