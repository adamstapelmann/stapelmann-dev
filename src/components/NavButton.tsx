import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Components.css';

interface Props {
    text: string; /* button text */
    link: string; /* link address */

}

/* Navigation button that launches an internal page */
const NavButton: React.FC<Props> = ({
    text,
    link
}) => {
    return (
        <Link to={link} className="NavButtonContainer">
            <button className="NavButton">
                {text}
            </button>
        </Link>
    );
}

export default NavButton;