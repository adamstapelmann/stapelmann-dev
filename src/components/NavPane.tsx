import React from "react";
import NavButton from './NavButton';
import NavButtonExternal from './NavButtonExternal';
import '../styles/Components.css';

/* A navigation pane for navigating the site */
function NavPane () {
    return (
        <div className="NavPane">
          <NavButton text="Projects" link="/projects" />
          <NavButton text="About" link="/about" />
          <NavButtonExternal text="Source" link="https://github.com/adamstapelmann/stapelmann-dev" />
        </div>
    );
}

export default NavPane;