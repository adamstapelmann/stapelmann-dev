import React from "react";
import Link from "../data/Link";
import '../styles/Components.css';

interface Props {
    link: Link;
}

/* A single list element with link information */
const LinkEl: React.FC<Props> = ({
    link
}) => {
    return (
        <li className="LinkEl">
            <span >
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.title}
                </a>
                {link.desc !== undefined && link.desc !== "" && " \u2014 " + link.desc}
            </span>
        </li>
    );
}

export default LinkEl;