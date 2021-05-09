import Link from "./Link";

/* Contains data on all links for the Link page */
module LinkData {
    /* collection of helpful links */
    let links: Array<Link> = new Array<Link>();
    links.push({title: "freecampsites.net", link: "https://www.freecampsites.net", 
        desc: "A collection of free campsites across the United States. From experience, these are often better than paid sites."});
    links.push({title: "paulgraham.com", link: "http://www.paulgraham.com", desc: "Wisdom."});
    links.push({title: "crew896.com", link: "https://crew896.com/", 
        desc: "Website for Venturing Crew 896 (which I also made)."});
    links.push({title: "bitbo.io", link: "https://bitbo.io/", desc: "Live bitcoin price tracker. It includes a logarithmic view, which is helpful."});
    links.push({title: "something like olivia", link: "https://www.youtube.com/watch?v=izkqPdVAdL4&ab_channel=johnmayerVEVO",
        desc: "Some of the most enlightened guitar playing around."})


    // used to sort books alphabetically
    function compareLinks(b1: Link, b2: Link) {
        return b1.title.toLowerCase() < b2.title.toLowerCase() ? -1 : 1;
    }

    // returns the list of book recommendations
    export function getLinks() {
        return links.sort(compareLinks);
    }
}

export default LinkData;
