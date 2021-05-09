import React from "react";
import '../styles/Components.css';

interface Props {
    text: string; /* button text */
    link: string; /* link address */
}

/* Navigation button that launches a page outside of this website */
const NavButtonExternal: React.FC<Props> = ({
    text,
    link
}) => {
    return (
        <div className="NavButtonContainer">
            <button onClick={() => window.open(link, "_blank")} className="NavButton">
                {text}
            </button>
        </div>
    );
}

export default NavButtonExternal;