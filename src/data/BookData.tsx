import Link from "./Link";

/* Contains data on all books for the Book page */
module BookData {
    // books I've read and would recommend that others read
    let recs: Array<Link> = new Array<Link>();
    recs.push({title: "Designing Data-Intensive Applications", link: "https://www.amazon.com/dp/1449373321", 
        desc: "Great book for an initial and thorough understanding of systems design. It's essentially a textbook, but it reads very well." });
    recs.push({title: "The Richest Man in Babylon", link: "https://www.amazon.com/dp/1939438632",
        desc: "A book of short stories set in Babylon. They describe how to grow and keep wealth."});
    recs.push({title: "Principles: Life and Work", link: "https://www.amazon.com/dp/1501124021", 
        desc: "Ray Dalio shares his principles for success."});
    recs.push({title: "Zero to One", link: "https://www.amazon.com/dp/0804139296", 
        desc: "Peter Thiel on startups."});
    recs.push({title: "The Intelligent Investor", link: "https://www.amazon.com/dp/0060555661", 
        desc: "This is the book that Warren Buffet always recommends people read to learn about investing. Tbh, it's really long and dense, and it's probably not a great place to begin learning about investing. But it is a good book, and it captures Buffett's style of investing."});
    recs.push({title: "Outliers: The Story of Success", link: "https://www.amazon.com/dp/0316017930", 
        desc: "An analysis of high achievers throughout history."});
    recs.push({title: "Talking to Strangers", link: "https://www.amazon.com/dp/0316478520", 
        desc: "A look at how we relate to and understand strangers."});
    

    // books that I have not read but intend to when I get time
    let unread: Array<Link> = new Array<Link>();
    unread.push({title: "Atomic Habits", link: "https://www.amazon.com/dp/0735211299"});
    unread.push({title: "Guns, Germs, and Steel", link: "https://www.amazon.com/dp/0393354326"});
    unread.push({title: "Think and Grow Rich", link: "https://www.amazon.com/dp/1585424331"});
    unread.push({title: "The Bitcoin Standard", link: "https://www.amazon.com/dp/1119473861"});
    unread.push({title: "The Price of Tomorrow", link: "https://www.amazon.com/dp/1999257405"});
    unread.push({title: "The Outsiders", link: "https://www.amazon.com/dp/1422162672"});
    unread.push({title: "Irrational Exuberance", link: "https://www.amazon.com/dp/0691173125"});
    unread.push({title: "The Big Score", link: "https://www.amazon.com/dp/0385183518"});
    unread.push({title: "Delears of Lightning", link: "https://www.amazon.com/dp/0887308910"});
    unread.push({title: "On the Shortness of Life", link: "https://www.amazon.com/dp/0143036327"});

    // used to sort books alphabetically
    function compareBooks(b1: Link, b2: Link) {
        return b1.title.toLowerCase() < b2.title.toLowerCase() ? -1 : 1;
    }

    // returns the list of book recommendations
    export function getRecs() {
        return recs.sort(compareBooks);
    }

    // returns the list of books I haven't read
    export function getUnread() {
        return unread.sort(compareBooks);
    }
}

export default BookData;

