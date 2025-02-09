import React from "react";
import NavButton from './NavButton';
import '../styles/Components.css';

/* A navigation pane for navigating the site */
function NavPane() {
    return (
        <div className="NavPane">
            <NavButton text="Projects" link="/projects" />
            <NavButton text="About" link="/about" />
        </div>
    );
}

export default NavPane;